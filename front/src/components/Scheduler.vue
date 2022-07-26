<template>
  <FullCalendar :options="calendarOptions" />
</template>

<script>
import '@fullcalendar/core/vdom'; // solves problem with Vite
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

export default {
  name: 'Scheduler',
  components: {
    FullCalendar,
  },
  data () {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
        initialView: 'timeGridWeek',
        select: this.handleTimeRangeSelect,
        selectable: true,
        events: [],
        nowIndicator: true,
        editable: false,
        headerToolbar: {
          start: 'today prev,next',
          center: 'title',
          end: 'timeGridWeek',
        },
      },
    };
  },
  methods: {
    handleTimeRangeSelect (arg) {
      // eslint-disable-next-line no-console
      console.log('handleTimeRangeSelect', arg);
    },
  },
};
</script>
