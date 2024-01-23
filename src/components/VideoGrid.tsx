import {VideoCard} from "./VideoCard.tsx";

const videos = [
    {
        title: "Thank for your services Mr.Regaltos!",
        image:"test.jpg",
        thumbnail:"logo.jpg",
        author:"Mortal",
        views:"566k",
        timestamp:"1 day ago"
    },
    {
        title: "Epic Gaming Moments with Dynamo",
        image: "test.jpg",
        thumbnail: "logo.jpg",
        author: "Dynamo Gaming",
        views: "2.3M",
        timestamp: "2 hours ago",
    },
    {
        title: "Cooking Adventure: Mastering Sushi",
        image: "test.jpg",
        thumbnail: "logo.jpg",
        author: "Chef Akira",
        views: "1.8M",
        timestamp: "3 days ago",
    },
    {
        title: "Exploring Uncharted Lands",
        image: "test.jpg",
        thumbnail: "logo.jpg",
        author: "Adventurer Jane",
        views: "980k",
        timestamp: "5 hours ago",
    },
    {
        title: "Tech Talk: Future of AI and Robotics",
        image: "test.jpg",
        thumbnail: "logo.jpg",
        author: "Tech Guru Max",
        views: "4.5M",
        timestamp: "1 week ago",
    }
]

export function VideoGrid(){
    return <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        {videos.map(video => <div>
            <VideoCard
            title={video.title}
            image={video.image}
            thumbnail={video.thumbnail}
            author={video.author}
            views={video.views}
            timestamp={video.timestamp}
            ></VideoCard>
        </div>)}
    </div>
}