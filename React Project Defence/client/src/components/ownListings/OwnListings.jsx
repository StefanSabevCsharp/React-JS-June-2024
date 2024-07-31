import { Link } from "react-router-dom";


const people = [
    {
      name: 'Leslie Alexander',
      email: 'leslie.alexander@example.com',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
      name: 'Michael Foster',
      email: 'michael.foster@example.com',
      role: 'Co-Founder / CTO',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
      name: 'Dries Vincent',
      email: 'dries.vincent@example.com',
      role: 'Business Relations',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: null,
    },
    {
      name: 'Lindsay Walton',
      email: 'lindsay.walton@example.com',
      role: 'Front-end Developer',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
      name: 'Courtney Henry',
      email: 'courtney.henry@example.com',
      role: 'Designer',
      imageUrl:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
    
  ]
  export default function OwnListings({listings}) {
    console.log(listings[0]);

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