<template>
  <FullCalendar :options="calendarOptions" />
</template>

<script>
import '@fullcalendar/core/vdom'; // solves problem with Vite
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { meeting } from '@/service/meeting';

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
      const { success, meetingInformation } = await meeting.create({ topic, start, end });

      if (success) {
        // eslint-disable-next-line no-alert
        alert(`\n🎉 Booking successful!\n\n${meetingInformation}`);
        this.addEventToCalendar(topic, start, end, meetingInformation);
      } else {
        // eslint-disable-next-line no-alert
        alert('❌ Booking failed. 👨‍💻 Debugging info in the console.');
      }
    },
    addEventToCalendar (topic, start, end, url) {
      this.calendarOptions.events.push({
        title: topic, start, end, url,
      });
    },
  },
};
</script>
