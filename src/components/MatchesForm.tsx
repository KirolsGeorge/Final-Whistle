import { Form } from 'react-router';

// type MatchProps = {
//   ID: number;
// };
type PlayerProps = {
  title: string;
};

const Player = ({ title }: PlayerProps) => {
  return (
    <label className='input rounde focus-within:outline-none focus-within:border-0 rounded'>
      <span className='label'>{title}</span>
      <input type='text' placeholder='Player Name' />
    </label>
  );
};

const Match = () => {
  const Team = () => {
    return (
      <section className='flex flex-col gap-2'>
        <label className='select rounded'>
          <span className='label'>Team</span>
          <select>
            <option>Personal</option>
            <option>Business</option>
          </select>
        </label>
        <Player title={`Goals:`} />
      </section>
    );
  };
  return (
    <div className='flex flex-1 gap-2 items-center justify-evenly glass p-1 rounded'>
      {/* <h1>{ID}</h1> */}
      <section className='flex flex-1 gap-2'>
        <Team />
        <Team />
      </section>
    </div>
  );
};

export default function MatchesForm() {
  const matches = Array.from({ length: 5 }, (_, i) => ({
    id: crypto.randomUUID(),
    display: i + 1,
  }));

  return (
    <Form method='post' className='rounded flex flex-col gap-1'>
      <h1>Matches:</h1>
      <section className='flex gap-2'>
        {Array.from({ length: 2 }, (_, i) => (
          <Player key={i} title={`Player ${i + 1}: `} />
        ))}
      </section>
      {matches.map((match) => (
        <Match key={match.id} />
      ))}
    </Form>
  );
}
