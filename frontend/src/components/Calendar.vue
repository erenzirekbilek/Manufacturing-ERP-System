<template>
  <div class="calendar">
    <div class="calendar-header">
      <button @click="prevMonth">&lt;</button>
      <span>{{ currentMonthName }} {{ year }}</span>
      <button @click="nextMonth">&gt;</button>
    </div>
    <div class="calendar-grid">
      <div v-for="day in weekDays" :key="day" class="calendar-day-header">{{ day }}</div>
      <div
        v-for="(day, idx) in calendarDays"
        :key="idx"
        class="calendar-day"
        :class="{ empty: !day, today: isToday(day) }"
      >
        {{ day }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const today = new Date();
const currentMonth = ref(today.getMonth());
const currentYear = ref(today.getFullYear());

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const currentMonthName = computed(() => monthNames[currentMonth.value]);

const calendarDays = computed(() => {
  const firstDay = new Date(currentYear.value, currentMonth.value, 1).getDay();
  const daysInMonth = new Date(currentYear.value, currentMonth.value + 1, 0).getDate();
  const days = [];
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let i = 1; i <= daysInMonth; i++) days.push(i);
  return days;
});

function prevMonth() {
  if (currentMonth.value === 0) { currentMonth.value = 11; currentYear.value--; }
  else currentMonth.value--;
}

function nextMonth() {
  if (currentMonth.value === 11) { currentMonth.value = 0; currentYear.value++; }
  else currentMonth.value++;
}

function isToday(day) {
  return day === today.getDate() && currentMonth.value === today.getMonth() && currentYear.value === today.getFullYear();
}
</script>

<style scoped>
.calendar { background: white; border-radius: 8px; padding: 1rem; }
.calendar-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; }
.calendar-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 2px; }
.calendar-day-header { text-align: center; font-weight: 600; padding: 0.5rem; background: #f3f4f6; }
.calendar-day { text-align: center; padding: 0.5rem; border: 1px solid #e5e7eb; }
.calendar-day.empty { background: #f9fafb; }
.calendar-day.today { background: #3b82f6; color: white; }
</style>