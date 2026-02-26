export default function MatchCard({ match, matchIndex, teams, isLoading, error, setMatches }: any) {
  return (
    <div className='collapse collapse-arrow bg-base-100 border border-white/20 light:border-black/20  rounded-md '>
      <input type='radio' name='my-accordion-2' defaultChecked={matchIndex === 0} />

      <div className='collapse-title font-semibold'>Match {matchIndex + 1}</div>

      <div className='collapse-content flex'>
        {match.teams.map((team: any, teamIndex: number) => (
          <fieldset key={teamIndex} className='fieldset rounded-box px-2 flex-1'>
            <legend>{`Team ${teamIndex + 1}`}</legend>

            <label className='label'>Team</label>

            <select
              required
              name={`choosenTeam${teamIndex + 1}`}
              className='select rounded-md'
              value={team.team}
              onChange={(e) => {
                setMatches((prev: any) => {
                  const updated = [...prev];
                  updated[matchIndex].teams[teamIndex].team = e.target.value;
                  return updated;
                });
              }}
            >
              <option disabled value=''>
                Pick a team
              </option>

              {error && <option disabled>{error.message}</option>}
              {isLoading && <option>Loading...</option>}

              {teams?.map((item: any) => (
                <option key={item.name} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>

            <label className='label'>Goals</label>

            <select
              required
              name={`Team Goals ${teamIndex + 1}`}
              className='select rounded-md'
              defaultValue={'Pick a number'}
              onChange={(e) => {
                setMatches((prev: any) => {
                  const updated = [...prev];
                  updated[matchIndex].teams[teamIndex].goals = Number(e.target.value);
                  return updated;
                });
              }}
            >
              <option disabled>Pick a number</option>

              {Array.from({ length: 10 }, (_, i) => (
                <option key={`goal${i + 1}`}>{i}</option>
              ))}
            </select>
          </fieldset>
        ))}
      </div>
    </div>
  );
}
