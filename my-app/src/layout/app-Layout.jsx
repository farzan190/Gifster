import {Outlet} from "react-router-dom";


const AppLayout = () => {
  return (
    <div >
      <div >
      
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;