import React from 'react';

// Section Components
import Header from '../components/home/Header';
import Signatureline from '../components/home/Signatureline';
import Cards from '../components/home/Cards';
import How from '../components/home/How';
import Finaltouch from '../components/home/Finaltouch';
import WorkIt from '../components/home/WorkIt';
import Loved from '../components/home/Loved';
import Akoya from '../components/home/Akoya';
import { CgData } from 'react-icons/cg';

const Home = () => {
  return (
    <main className="flex flex-col gap-10"> {/* Vertical spacing between all sections */}
      <Header />
      <Signatureline />
      <Cards />
      <How />
      <Finaltouch />
      <WorkIt />
      <Loved />
      <Akoya />
    </main>
  );
};

export default Home;
CgData