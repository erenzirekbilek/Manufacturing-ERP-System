<template>
  <div class="reports-view">
    <h1>Reports & Analytics</h1>
    <div class="report-filters">
      <select v-model="reportType">
        <option value="sales">Sales Report</option>
        <option value="inventory">Inventory Report</option>
        <option value="financial">Financial Report</option>
        <option value="customers">Customer Report</option>
        <option value="orders">Order Report</option>
      </select>
      <input v-model="startDate" type="date" />
      <input v-model="endDate" type="date" />
      <button @click="generateReport">Generate</button>
      <button @click="exportReport">Export Excel</button>
    </div>
    <div class="report-data" v-if="reportData.length">
      <DataTable :columns="columns" :data="reportData" />
      <Pagination :page="page" :total="total" @change="loadPage" />
    </div>
    <p v-else>Select report type and date range.</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ReportService from '../services/ReportService';
import { exportToExcel } from '../utils/xlsxUtils';
import DataTable from '../components/DataTable.vue';
import Pagination from '../components/Pagination.vue';

const reportType = ref('sales');
const startDate = ref('');
const endDate = ref('');
const reportData = ref([]);
const page = ref(1);
const total = ref(0);
const columns = ref([]);

async function generateReport() {
  const params = { startDate: startDate.value, endDate: endDate.value, page: page.value };
  const res = await ReportService[`get${reportType.value.charAt(0).toUpperCase() + reportType.value.slice(1)}Report`](params);
  reportData.value = res.data.items || res.data;
  columns.value = res.data.columns || [];
  total.value = res.data.total || reportData.value.length;
}

function exportReport() {
  exportToExcel(reportData.value, `${reportType.value}-report.xlsx`, 'Report');
}

function loadPage(p) {
  page.value = p;
  generateReport();
}
</script>

<style scoped>
.report-filters { display: flex; gap: 1rem; margin-bottom: 1rem; }
.report-filters select, .report-filters input { padding: 0.5rem; }
</style>