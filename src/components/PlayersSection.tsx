export default function PlayersSection({ config }: any) {
  return (
    <div className='flex gap-2'>
      {Array.from({ length: config.playersCount || 0 }, (_, i) => (
        <label key={i} className='input focus-within:outline-none rounded'>
          <span>{`Player ${i + 1}`}</span>

          <input
            required
            name={`player${i + 1}`}
            type='text'
            placeholder='Player Name'
          />
        </label>
      ))}
    </div>
  );
}
