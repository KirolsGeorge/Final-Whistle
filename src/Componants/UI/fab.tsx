export default function FAB() {
  function addMatchHandel() {
    console.log('add Button');
  }
  return (
    <div className='fab mb-16'>
      <button className='btn btn-lg btn-circle btn-secondary transition-all duration-400' onClick={addMatchHandel}>
        <svg aria-label='New' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' className='size-6'>
          <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
        </svg>
      </button>
    </div>
  );
}
