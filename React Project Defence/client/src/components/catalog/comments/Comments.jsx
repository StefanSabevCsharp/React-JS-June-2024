import { useEffect, useState } from "react";
import splitName from "../../../utils/splitName";

export default function Comments({comments}) {
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        if (comments) {
            setLoading(false);
        }
    }, [comments]);

    
    return (
        <div className="bg-gray-100 p-4 max-w-2xl mx-auto">
            <h2 className="text-lg font-bold mb-4">Comments</h2>
            <div className="flex flex-col space-y-4">
                {loading ? (
                    <div className="flex justify-center items-center">
                        <div className="loader"></div>
                    </div>
                ) : (
                    comments?.length === 0 ? (
                        <p className="text-gray-500">No comments yet.</p>
                    ) : (
                        comments?.map((comment, index) => (
                            comment.author && comment.author.email ? (
                                <div className="bg-white p-3 rounded-lg shadow-md" key={index}>
                                    <h3 className="text-lg font-bold">{splitName(comment.author.email)}</h3>
                                    <p className="text-gray-700 text-sm">
                                       {comment.comment}
                                    </p>
                                </div>
                            ) : null
                        ))
                    )
                )}
            </div>
        </div>
    );
}