export function VideoCard(props:any){
    return <div className='p-3'>
        <img src={props.image}
             alt="video thumbnail"
             className='rounded-2xl'
        />
        <div className='grid grid-cols-12'>
            <div className='col-span-1'>
                <img src={props.thumbnail} alt='Logo'
                className='h-12 w-12 aspect-square rounded-full'
                />
            </div>
            <div className='col-span-11 pl-2'>
                <div className='text-white font-medium'>{props.title}</div>
                <div className='col-span-11 text-gray-400 text-base'>{props.author}</div>
                <div className='col-span-11 text-gray-600 text-base'>{props.views} views | {props.timestamp}</div>
            </div>
        </div>
    </div>

}
