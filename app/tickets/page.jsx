import React, { Suspense } from "react";
import TicketList from "./TicketList";
import Loading from "../loading";
import Link from "next/link";

export default function News() {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p>
            <small>Currently open tickets</small>
          </p>
        </div>

        <Link className="createnewticket" href="/tickets/create">
          <button>Create Ticket</button>
        </Link>
        
      </nav>
      <Suspense fallback={<Loading></Loading>}>
        <TicketList></TicketList>
      </Suspense>
    </main>
  );
}
