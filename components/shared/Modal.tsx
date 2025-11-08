import type React from "react";
import type { KeyboardEvent } from "react";
import {XClose} from "@untitled-ui/icons-react";

export interface ModalProps {
    title: string;
    visible: boolean;
    onCloseHandler: () => void;
    children: React.ReactNode;
    isFooter?: boolean;
}

export default function Modal({
  title,
  visible,
  onCloseHandler,
  children,
  isFooter = false,
}: ModalProps) {
    if (!visible) return null;

    const backgroundClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        if ((e.target as HTMLElement).id === "modal_background_id") {
            onCloseHandler();
        }
    };

    const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
            onCloseHandler();
        }
    };

    return (
        <div
            id="modal_background_id"
            role="dialog"
            aria-modal="true"
            aria-label={title}
            onClick={backgroundClickHandler}
            onKeyDown={onKeyDown}
            tabIndex={-1}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.2)]"
        >
            <div className="bg-white box-border p-8 w-[500px] h-[300px] md:w-[335px] md:h-[230px] md:p-5 rounded">
                <div className="flex items-center justify-end">
                    <button
                        type="button"
                        onClick={onCloseHandler}
                        aria-label="Close modal"
                        className="p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
                    >
                        <span className="block w-5 h-5 text-black cursor-pointer" aria-hidden>
              <XClose />
            </span>
                    </button>
                </div>

                <h3
                    className={`text-center font-semibold text-lg text-black mt-4 ${
                        isFooter ? "text-2xl" : ""
                    }`}
                >
                    {title}
                </h3>

                <div className="w-full mt-3 text-center text-base text-black font-light leading-8">
                    {children}
                </div>
            </div>
        </div>
    );
}
