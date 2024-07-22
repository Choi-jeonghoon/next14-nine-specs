import BodyFont from "../BodyFont";
import LOGO_ICON from "../../../public/images/logo/LOGO.svg";
import { MessagesType } from "@/store/chatStore";

export default function MessageBox(props: MessagesType) {
  const { role, content } = props;

  // User
  if (role === "user")
    return (
      <div className="flex justify-end">
        <BodyFont level="5" weight="regular" className="p-2 bg-grayscale-100 rounded-md max-w-80">
          {content}
        </BodyFont>
      </div>
    );
  // AI
  else
    return (
      <div className="flex gap-2 items-start">
        <div className="w-12 h-12 bg-primary-900 flex items-center justify-center rounded-md">
          <LOGO_ICON width="30" height="26" />
        </div>
        <div className="p-2 bg-background rounded-md max-w-80">
          {content.split("\n").map((line, index) => (
            <BodyFont key={index} level="5" weight="regular">
              {line}
            </BodyFont>
          ))}
        </div>
      </div>
    );
}
