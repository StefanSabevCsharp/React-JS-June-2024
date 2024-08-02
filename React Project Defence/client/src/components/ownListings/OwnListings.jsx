import { Link } from "react-router-dom";

export default function OwnListings({ listings }) {


  return (
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-2xl font-bold leading-tight text-gray-900 mb-8 text-center">My Listings</h1>
      <ul role="list" className="grid grid-cols-2 gap-6">
        {listings.length > 0 ? (
          listings.map((listing) => (
            <li key={listing._id} className="flex flex-col items-center justify-center py-4">
              <Link to={`/catalog/${listing._id}`} className="flex flex-col items-center text-center mb-2">
                <img src={listing.imageUrl} className="h-32 w-32 rounded-full bg-gray-50" alt={listing.title} />
                <p className="mt-2 text-sm font-semibold leading-6 text-gray-900 truncate">{listing.title}</p>
                <p className="mt-2 text-sm font-semibold leading-6 text-gray-900 truncate">${listing.price}</p>
              </Link>
              <Link
                to={`/edit/${listing._id}`}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-transform transform hover:scale-105"
              >
                Edit
              </Link>
            </li>
          ))
        ) : (
          <h2 className="text-center text-gray-500 text-xl mt-10">
            No listings found
          </h2>
        )}
      </ul>
    </div>
  );
}