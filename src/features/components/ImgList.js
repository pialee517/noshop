import React from 'react'

const ImgList = () => {
  return (
    <React.Fragment>
        <ImageList sx={{ width: 500, height: 450 }}>
            <ImageListItem cols={2}>
              <ListSubheader component="div">Electronics</ListSubheader>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title} loading="lazy"/>
               <ImageListItemBar
                title={item.title}
                subtitle={item.author}
                actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${item.title}`}>
                  <InfoIcon />
                </IconButton>} />
            </ImageListItem>
          </ImageList>
    </React.Fragment>
  )
}

export default ImgList