import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { Navbar } from '../ui/Navbar'
import { messages } from '../../helpers/calendar-messages-es'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'moment/locale/es'
import { CalendarEvent } from './CalendarEvent'
import { CalendarModal } from './CalendarModal'
import { useState } from 'react'


moment.locale('es')
const localizer = momentLocalizer(moment)
const events = [{
    title: 'Cumpleaños del jefe',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    bgcolor: '#fafafa',
    notes: 'Comprar el pastel',
    user: {
        _id: '123',
        name: 'Fernando'
    }
}]

export const CalendarScreen = () => {

    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

    const onDoubleClick = (e) => {
        console.log(e);
    }

    const onSelect = (e) => {
        console.log(e);
    }

    const onViewChange = (e) => {
        setLastView(e);
        localStorage.setItem('lastView', e);
    }

    const eventStyleGetter = (event, start, end, isSelected) => {
        const style = {
            backgroundColor: '#367CF7',
            borderRadius: '0px',
            opacity: '0.8',
            display: 'block',
            color: 'white'
        };

        return { style };
    }

    return (
        <div className="calendar-screen">
            <Navbar />
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                messages={messages}
                eventPropGetter={eventStyleGetter}
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={onSelect}
                onView={onViewChange}
                view={lastView}
                components={{ event: CalendarEvent }}
            />
            <CalendarModal />
        </div>
    )
}
