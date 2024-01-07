'use client'
import React, { useState } from 'react';
import Link from 'next/link';

async function getTickets() {
    const res = await fetch('http://localhost:4000/tickets', {
        next: { revalidate: 0 }
    });
    return res.json();
}

async function deleteTicket(id, setTickets) {
    await fetch(`http://localhost:4000/tickets/${id}`, { method: 'DELETE' });
    setTickets(tickets => tickets.filter(ticket => ticket.id !== id));
}

export default function TicketList() {
    const [tickets, setTickets] = useState(null);

    // Fetch tickets if not already loaded
    if (tickets === null) {
        getTickets().then(setTickets);
    }

    // Render loading state
    if (tickets === null) {
        return <p>Loading tickets...</p>;
    }

    // Render tickets
    return (
        <div>
            {tickets.map(ticket => (
                <div key={ticket.id} className="card my-5">
                    <Link href={`/tickets/${ticket.id}`}>
                        <p>
                            <h3>{ticket.title}</h3>
                            <p>{ticket.body.slice(0, 200)}...</p>
                        </p>
                    </Link>
                    <div className={`pill ${ticket.priority}`}>
                        {ticket.priority} priority
                    </div>
                    <button className="delete1" onClick={() => deleteTicket(ticket.id, setTickets)}>Delete</button>
                </div>
            ))}

            {tickets.length === 0 && <p>There are no tickets, lesgo!</p>}
        </div>
    );
}
