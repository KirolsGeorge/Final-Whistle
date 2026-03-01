export default function LoadingSkeleton({ skeletonType }: { skeletonType: string }) {
  if (skeletonType === 'loadingPlayers') {
    return (
      <div className='flex flex-col gap-2'>
        <div className='flex w-52 flex-col gap-4'>
          <div className='flex items-center gap-4'>
            <div className='skeleton h-16 w-16 shrink-0 rounded-full'></div>
            <div className='flex flex-col gap-4'>
              <div className='skeleton h-4 w-20'></div>
              <div className='skeleton h-4 w-28'></div>
            </div>
          </div>
        </div>
        <div className='flex w-52 flex-col gap-4'>
          <div className='flex items-center gap-4'>
            <div className='skeleton h-16 w-16 shrink-0 rounded-full'></div>
            <div className='flex flex-col gap-4'>
              <div className='skeleton h-4 w-20'></div>
              <div className='skeleton h-4 w-28'></div>
            </div>
          </div>
        </div>
        <div className='flex w-52 flex-col gap-4'>
          <div className='flex items-center gap-4'>
            <div className='skeleton h-16 w-16 shrink-0 rounded-full'></div>
            <div className='flex flex-col gap-4'>
              <div className='skeleton h-4 w-20'></div>
              <div className='skeleton h-4 w-28'></div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (skeletonType === 'loadingForas') {
    return (
      <div className='flex flex-col gap-2'>
        <div className='flex flex-1 flex-col gap-4'>
          <div className='skeleton h-32 w-full'></div>
          <div className='skeleton h-4 w-28'></div>
          <div className='skeleton h-4 w-full'></div>
          <div className='skeleton h-4 w-full'></div>
        </div>
        <div className='flex flex-1 flex-col gap-4'>
          <div className='skeleton h-32 w-full'></div>
          <div className='skeleton h-4 w-28'></div>
          <div className='skeleton h-4 w-full'></div>
          <div className='skeleton h-4 w-full'></div>
        </div>
        <div className='flex flex-1 flex-col gap-4'>
          <div className='skeleton h-32 w-full'></div>
          <div className='skeleton h-4 w-28'></div>
          <div className='skeleton h-4 w-full'></div>
          <div className='skeleton h-4 w-full'></div>
        </div>
      </div>
    );
  }
}
