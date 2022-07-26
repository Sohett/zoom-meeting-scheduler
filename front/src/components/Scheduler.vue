<template>
  <FullCalendar :options="calendarOptions" />
</template>

<script>
import '@fullcalendar/core/vdom'; // solves problem with Vite
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import API from '@/service/api';

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
      // eslint-disable-next-line no-alert
      const meetingTopic = window.prompt(`\n👋 VALIDATE THE ZOOM MEETING WITH THOMAS SOHET ?\n\nFrom: ${arg.start} \nTo: ${arg.end}\n\nEnter the topic of the Zoom meeting (⚠ required)`);
      if (meetingTopic != null && meetingTopic !== '') {
        this.handleConfirmBooking(meetingTopic, arg.start, arg.end);
      } else {
        // eslint-disable-next-line no-alert
        alert('❌ Booking canceled');
      }
    },
    async handleConfirmBooking (topic, start, end) {
      this.calendarOptions.events.push({
        title: topic, start, end,
      });

      const meetingDuration = Math.abs((new Date(end)) - (new Date(start))) / 60000;

      const payload = {
        meetingStart: start,
        meetingDuration,
        meetingTopic: topic,
      };

      const { success } = await API.post('/zoom-meeting-creater', payload);

      const meetingInformation = 'test';

      // eslint-disable-next-line
      success ? alert(`\n🎉 Booking successful!\n\n${meetingInformation}`) : alert('❌ Booking failed');
    },
  },
};
</script>
