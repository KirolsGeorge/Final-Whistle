import type { Team } from '../types/types';
type TeamsListProps = {
  items: Team[];
  isLoading: boolean;
  error: Error | null;
};

export default function TeamsList({ items, isLoading, error }: TeamsListProps) {
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
        items?.map((item) => (
          <option key={item.name} onClick={() => console.log(item.name)}>
            {item.name}
          </option>
        ))}
    </select>
  );
}
