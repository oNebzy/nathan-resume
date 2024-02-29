export function SkillBox(props) {
  return (
    <div className="rounded-lg w-full h-[86px] flex flex-col p-2 justify-evenly">
      <div className="w-full h-full flex justify-center items-center">
        <img src={props.imageImport} alt={""} className="max-h-10"></img>
      </div>
      <div>{props.skill}</div>
    </div>
  )
}