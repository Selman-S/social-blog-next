'use client'
import * as React from 'react';
import { Post } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import usePostsCall from '@/service/usePostsCall';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { convertDateFormat } from '@/utils/convertDate';
import { IoClose } from "react-icons/io5";
import { postSlice, reduxStore, selectPost } from '@/lib/redux';
import { useDispatch, useSelector } from 'react-redux';



export default function PostCard({ post }: { post: Post }) {

 // const dispatch = useDispatch()

 // const posts = useSelector(selectPost);
 // console.log(posts);

 // const handleRemove = (id: string) => {
 //  dispatch(postSlice.actions.removePost(id))
 // }


 return (

  <Card sx={{ Width: 500 }} className='card'>
   <CardHeader
    avatar={
     <Avatar aria-label="recipe">
      <Image src={post.owner?.picture} className="rounded" alt={post.owner?.firstName} width={40} height={40} />
     </Avatar>
    }
    action={
     <IconButton aria-label="settings">
      {/* <IoClose className="w-6 h-6" onClick={() => handleRemove(post.id)} /> */}
      <IoClose className="w-6 h-6" />
     </IconButton>
    }
    title={post.owner?.firstName + " " + post.owner?.lastName}
    subheader={convertDateFormat(post.publishDate)}
   />
   <Image
    src={post.image}
    width={345}
    height={200}
    alt={post.text}
   />
   <CardContent>
    <Typography variant="body2" color="text.secondary">
     {post.text}
    </Typography>
   </CardContent>
   <CardActions disableSpacing>
    <IconButton aria-label="add to favorites">
     <FavoriteIcon />
    </IconButton>
    <IconButton aria-label="share">
     <ShareIcon />
    </IconButton>

    <Link href={`/posts/${post.id}`}>
     Düzenle
    </Link>
    {/* <button onClick={() => handleRemove(post.id)} > */}
    <button  >
     Sil
    </button>
   </CardActions>

  </Card>

 );
}



// interface ExpandMoreProps extends IconButtonProps {
//   expand: boolean;
// }

// const ExpandMore = styled((props: ExpandMoreProps) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

// export default function RecipeReviewCard() {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (

//   );
// }