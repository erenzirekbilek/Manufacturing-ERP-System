import { reactive, readonly } from 'vue';
import ReportService from '../services/ReportService';

const state = reactive({ reports: {}, loading: false, error: null });

export function useReportStore() {
  const generateReport = async (type, params) => { state.loading = true; try { state.reports[type] = (await ReportService[`get${type}Report`](params)).data; state.error = null; } catch (e) { state.error = e.message; } finally { state.loading = false; } };
  const exportReport = async (type, format) => { await ReportService.exportReport(type, format); };
  return { reports: readonly(state.reports), loading: readonly(state.loading), error: readonly(state.error), generateReport, exportReport };
}
export default useReportStore;