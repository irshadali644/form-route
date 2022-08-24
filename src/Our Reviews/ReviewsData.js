import { useState } from "react"
import Reviews from "./Reviews/Reviews";

const ReviewsList = [
    {
        name: 'Bill Anderson',
        job: 'THE BOSS',
        info: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.',
        img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg'
    },
    {
        name: 'Susan Smith',
        job: 'WEB DEVELOPER',
        info: 'Im baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry',
        img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg'
    },
    {
        name: 'Anna Johnson',
        job: 'WEB DESIGNER',
        info: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
        img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg'
    },
    {
        name: 'Peter Jones',
        job: 'INTERN',
        info: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
        img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg'
    },
]
let count = 0;
let lenght = ReviewsList.length - 1

function ReviewsData() {
    const [review, setreview] = useState(ReviewsList[count])
    
    const getDetails = () => {
        if (count >= lenght) {
            // console.log('if');
            count = 0;
        } else {
            count++
            // console.log('else');
        }
        setreview(ReviewsList[count])
    }
    
    const backdetail = () => {
        if (count <= 0) {
            // console.log('if');
            count = 3
        } else {
            // console.log('else');
            count--
        }
        setreview(ReviewsList[count])
    }

    return (
        <div>
            <Reviews data={review} clickright={getDetails} clickleft={backdetail} />
        </div>
    )
}
export default ReviewsData