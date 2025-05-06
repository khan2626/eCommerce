import React from "react";

const Loading = () => {
    return (
        <div className="flex gap-6 justify-center items-center h-screen">
            <span className="loading loading-dots loading-lg"></span>
            <span className="loading loading-spinner text-error"></span>
            <span className="loading loading-dots loading-lg"></span>
        </div>
    );
};

export default Loading;
