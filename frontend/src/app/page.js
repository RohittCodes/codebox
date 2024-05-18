import { EditorComponent } from "@/components/editor";
import { InputField } from "@/components/input";
import { OutputField } from "@/components/output";
import { Sidebar } from "@/components/side-bar";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="h-full flex bg-background">
      <Sidebar />
      <Separator className="w-[1px] h-full bg-border" />
      <EditorComponent />
      <Separator className="w-[1px] h-full bg-border" />
      <div className="h-full w-1/4 flex flex-col py-2 gap-2">
        <InputField />
        <OutputField />
      </div>
    </div>
  );
}
