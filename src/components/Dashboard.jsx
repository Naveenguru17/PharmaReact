import React from 'react';

function Dashboard() {
  return (
    <div className="relative w-full h-[90vh] lg:h-[90vh]">
      <iframe
        title="medsales"
        className="absolute top-0 left-0 w-full h-full"
        src="https://app.powerbi.com/reportEmbed?reportId=98d75817-8716-406f-84c5-4818806f7777&autoAuth=true&ctid=bc88ed7e-984d-4728-939e-6ab8bfeaba1d"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Dashboard;
