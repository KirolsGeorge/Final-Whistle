import { useFootballAPI } from '../hooks/useFootballAPI';

export default function TeamsList() {
  const { data: teams, isLoading, error } = useFootballAPI();

  return (
    <select defaultValue='Pick team' className='select rounded-md'>
      <option disabled={true}>Pick team</option>
      {error && <option disabled={true}>{error.message}</option>}
      {isLoading && (
        <option disabled={true} className='skeleton skeleton-text'>
          Loading Teams...
        </option>
      )}
      {!isLoading &&
        teams?.map((item) => (
          <option key={item.name} onClick={() => console.log(item.name)}>
            {item.name}
          </option>
        ))}
    </select>
  );
}
