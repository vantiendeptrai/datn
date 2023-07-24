import type { UploadProps } from "antd";
import { Upload, message } from "antd";

import { AiOutlineCloudUpload } from "react-icons/ai";

const { Dragger } = Upload;

const InfoUpload = () => {
  const props: UploadProps = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <>
      <Dragger {...props}>
        <div
          className="
          flex
          justify-center"
        >
          <div
            className="
            flex
            flex-col
            justify-center
            items-center
            gap-1"
          >
            <div className="bg-secondary dark:bg-backgroundDark rounded-full p-2">
              <AiOutlineCloudUpload size={30} className="text-primary" />
            </div>

            <span
              className="
              p-3 text-textLight2nd dark:text-textDark2nd"
            >
              Nhấp để tải lên hoặc kéo và thả SVG, PNG, JPG hoặc GIF (tối đa,
              800x400px)
            </span>
          </div>
        </div>
      </Dragger>
    </>
  );
};

export default InfoUpload;
