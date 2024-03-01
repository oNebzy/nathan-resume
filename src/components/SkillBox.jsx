export function SkillBox(props) {
  return (
    <div className="rounded-lg w-full md:h-[86px] h-[70px] flex flex-col p-2 justify-evenly">
      <div className="w-full h-full flex justify-center items-center">
        <img src={props.imageImport} alt={""} className="max-h-10 md:max-w-10 max-w-8"></img>
      </div>
      <div>{props.skill}</div>
    </div>
  )
}