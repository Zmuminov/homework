import user from "../assets/user.svg";
import close from "../assets/close.svg";
import icon from "../assets/icon.svg";
function ReightSidebar() {
  return (
    <div className="w-[20%] min-h-[100vh] text-[#B2B2B2] bg-black ">
      <div className="pt-8 pl-8">
        <p className="flex text-[#B2B2B2] items-center">
          <span className="flex gap-1 text-[20px] font-bold">
            Friend <span></span> Activity
          </span>{" "}
          <img src={user} alt="" /> <img src={close} alt="" />
        </p>
        <p className="text-[18px] w-[270px]">
          Let friends and followers on Spotify see what you’re listening to.
        </p>
        <br />
        <img src={icon} width={170} alt="" />
        <br />
        <img src={icon} width={170} alt="" />
        <br />
        <img src={icon} width={170} alt="" />
      </div>
    </div>
  ); 
}

export default ReightSidebar;
