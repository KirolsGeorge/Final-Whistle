import { Form } from 'react-router';
import TeamsList from './TeamsList';
import { useFootballAPI } from '../hooks/useFootballAPI';

export default function MatchesForm() {
  const { data: teams, isLoading, error } = useFootballAPI();

  return (
    <Form className='rounded flex flex-col gap-3'>
      <section className='flex flex-col gap-2'>
        <h1>Players:</h1>
        <div className='flex gap-2'>
          {Array.from({ length: 2 }, (_, i) => (
            <label key={`Player ${i + 1}`} className='input focus-within:outline-none focus-within:border-0 rounded'>
              <span className='label mr-0'>{`Player ${i + 1}: `}</span>
              <input type='text' placeholder='Player Name' />
            </label>
          ))}
        </div>
      </section>
      <section className='flex flex-col gap-2 relative'>
        <h1>Matches:</h1>
        <div className='flex flex-col gap-2'>
          {Array.from({ length: 5 }, (_, i) => (
            <div key={`Match ${i + 1}`} className='collapse collapse-arrow bg-base-100 border border-base-300 rounded-md'>
              <input type='radio' name='my-accordion-2' defaultChecked={i + 1 === 1 ? true : false} />
              <div className='collapse-title font-semibold'>{`Match ${i + 1}`}</div>
              <div className='collapse-content flex'>
                {Array.from({ length: 2 }, (_, i) => (
                  <fieldset key={`Team ${i + 1}`} className='fieldset rounded-box px-2 flex-1'>
                    <legend className='fieldset-legend'>{`Team ${i + 1} details`}</legend>

                    <label className='label'>Team</label>
                    <TeamsList key={`Team ${i + 1} details`} items={teams!} isLoading={isLoading} error={error} />

                    <label className='label'>Goals</label>
                    <input type='text' className='input' placeholder='EX: 1' />
                  </fieldset>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Form>
  );
}
