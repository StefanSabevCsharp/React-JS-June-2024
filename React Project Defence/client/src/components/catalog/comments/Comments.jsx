export default function Comments({comments}) {

    
    
    
    return (
        <div className="bg-gray-100 p-4 max-w-2xl mx-auto">
            <h2 className="text-lg font-bold mb-4">Comments</h2>
            <div className="flex flex-col space-y-4">
                {comments.length === 0 ? (
                    <p className="text-gray-500">No comments yet.</p>
                ) : (
                    comments.map((comment, index) => (
                        <div className="bg-white p-3 rounded-lg shadow-md" key={index}>
                            <h3 className="text-lg font-bold">TO DO ADD USERNAME</h3>
                            <p className="text-gray-700 text-sm">
                               {comment.comment}
                            </p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}