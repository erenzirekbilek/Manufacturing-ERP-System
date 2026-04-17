export function handleApiError(error) {
  if (error.response) {
    const { status, data } = error.response;
    switch (status) {
      case 400: return data.message || 'Bad request';
      case 401: return 'Unauthorized - please login';
      case 403: return 'Forbidden - access denied';
      case 404: return 'Not found';
      case 500: return 'Server error';
      default: return data.message || 'An error occurred';
    }
  }
  return 'Network error - please check connection';
}

export function isNetworkError(error) {
  return !error.response;
}

export function formatErrorMessage(error) {
  return handleApiError(error);
}

export default { handleApiError, isNetworkError, formatErrorMessage };