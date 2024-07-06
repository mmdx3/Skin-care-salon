import ReactPlayer from "react-player";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import Image from "next/image";

// Er7snyQKM

const ModalVideo = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex items-center gap-4 cursor-pointer">
          <button className="relative w-[58px] h-[58px] rounded-full flex items-center justify-center shadow-2xl shadow-accent">
            <Image
              src={"/assets/home/play.svg"}
              alt=""
              width={36}
              height={36}
            />
          </button>
          <span className="text-lg font-primary">Watch Video</span>
        </div>
      </DialogTrigger>
      <DialogContent>
        <ReactPlayer
          width={"100%"}
          height={"100%"}
          url={"https://www.aparat.com/v/l2965k1"}
          muted
        />
      </DialogContent>
    </Dialog>
  );
};

export default ModalVideo;
