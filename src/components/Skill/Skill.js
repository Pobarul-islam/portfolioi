import ProgressBar from 'react-bootstrap/ProgressBar';

function Skill() {
  return (
   <div className='mt-5 row '>
    <h2 className="text-center fw-500">Skill</h2>
     <div className='mt-4 col-6'>
        <h3>FrontEnd Developer</h3>
     <div className='mt-5'>
     
      <ProgressBar variant="primary" now={100} />
      <h6>HTML</h6>
      
      <ProgressBar className='mt-4' variant="primary" now={98} />
      <h6>CSS</h6>
     
      <ProgressBar className='mt-4'  variant="primary" now={85} />
      <h6>JAVASCRIPT</h6>
      <ProgressBar className='mt-4' variant="primary" now={90} />
      <h6>REACT</h6>
     </div>
    </div>
     <div className='mt-4 col-6'>
     <h3>BackEnd Developer</h3>
      <div className='mt-5'>
        
      <ProgressBar variant="primary" now={80} />
      <h6>NODE.JS</h6>  
      <ProgressBar className='mt-4' variant="primary" now={80} />
      <h6>MONGODB</h6>  
      <ProgressBar className='mt-4'  variant="primary" now={70} />
      <h6>FIREBASE</h6>  
      <ProgressBar className='mt-4' variant="primary" now={75} />
      <h6>EXPRESSJS</h6>  
      </div>
    </div>
   </div>
  );
}

export default Skill;