import { Form } from 'react-router';
import TeamsList from './TeamsList';
import { useForaConfig } from '../features/fora/hooks/useForaConfig';
import { Settings } from 'lucide-react';
import 'react';

declare module 'react' {
  interface HTMLAttributes<T> {
    popovertarget?: string;
  }
}

export default function MatchesForm() {
  const [config, dispatch] = useForaConfig();

  return (
    <Form className='rounded flex flex-col gap-3'>
      <section className='flex flex-col overflow-visible'>
        <div className='flex items-center justify-end'>
          <button className='btn btn-ghost btn-circle' popovertarget='popover-1' style={{ anchorName: '--anchor-1' } as React.CSSProperties}>
            <Settings />
          </button>
          <ul
            className='dropdown menu w-52 rounded-box bg-base-100 shadow-sm'
            popover='auto'
            id='popover-1'
            style={{ positionAnchor: '--anchor-1' } as React.CSSProperties}
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
        <h1 className='mb-1'>Players:</h1>
        <div className='flex gap-2'>
          {config.playersCount &&
            Array.from({ length: config.playersCount }, (_, i) => (
              <label key={`Player ${i + 1}`} className='input focus-within:outline-none focus-within:border-0 rounded'>
                <span className='label mr-0'>{`Player ${i + 1}: `}</span>
                <input type='text' placeholder='Player Name' />
              </label>
            ))}
        </div>
      </section>
      <section className='flex flex-col relative'>
        <div className='flex items-center justify-between mb-1'>
          <h1>Matches:</h1>
        </div>
        <div className='flex flex-col gap-2'>
          {config.matchesCount &&
            Array.from({ length: config.matchesCount }, (_, i) => (
              <div key={`Match ${i + 1}`} className='collapse collapse-arrow bg-base-100 border border-base-300 rounded-md'>
                <input type='radio' name='my-accordion-2' defaultChecked={i + 1 === 1 ? true : false} />
                <div className='collapse-title font-semibold'>{`Match ${i + 1}`}</div>
                <div className='collapse-content flex'>
                  {config.teamsPerMatch &&
                    Array.from({ length: config.teamsPerMatch }, (_, i) => (
                      <fieldset key={`Team ${i + 1}`} className='fieldset rounded-box px-2 flex-1'>
                        <legend className='fieldset-legend'>{`Team ${i + 1} details`}</legend>

                        <label className='label'>Team</label>
                        <TeamsList key={`Team ${i + 1} details`} />

                        <label className='label'>Goals</label>
                        <input type='text' className='input rounded-md' placeholder='EX: 1' />
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
