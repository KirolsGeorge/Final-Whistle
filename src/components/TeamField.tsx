export default function TeamField({ label, valueTeam, valueGoals, teams, onTeamChange, onGoalsChange }: any) {
  return (
    <fieldset className='flex-1 border p-2 rounded'>
      <legend>{label}</legend>

      <select className='select w-full' value={valueTeam} onChange={(e) => onTeamChange(e.target.value)}>
        <option value=''>Pick Team</option>
        {teams?.map((team: any) => (
          <option key={team.name} value={team.name}>
            {team.name}
          </option>
        ))}
      </select>

      <input type='number' className='input w-full mt-2' value={valueGoals} onChange={(e) => onGoalsChange(Number(e.target.value))} />
    </fieldset>
  );
}
