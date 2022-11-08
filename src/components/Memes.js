import React from 'react';
import { useQuery } from 'react-query';
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material'

const fetchMemes = async () => {
    const response = await fetch('https://api.imgflip.com/get_memes');
    return response.json();
}

const Memes = () => {
    const { data, status, refetch } = useQuery('memes', fetchMemes, {enabled: false});
    console.log(data);

    const handleClick = () => {
        refetch();
    }

    return (
        <div>
            <div className={'center'}>
                <button onClick={handleClick}>Load memes</button>
            </div>
            {status === 'success' && (
                <ImageList variant="masonry" cols={3} gap={8}>
                    {data.data.memes.map(meme => 
                        <ImageListItem key={meme.id}>
                            <img src={`${meme.url}?w=248&fit=crop&auto=format`}
                                srcSet={`${meme.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={meme.name}
                                loading='lazy'/>
                            <ImageListItemBar
                                title={meme.name}/>
                        </ImageListItem>)
                    }
                </ImageList>
            )}
        </div>
    );
}

export default Memes;