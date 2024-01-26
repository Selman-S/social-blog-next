import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { photoList } from './photoList'
import { UserFull } from '@/types/types'
import { Button } from '@mui/material'
import { FaChevronDown } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

interface Props {
	user: UserFull
}
const ProfileDetail = ({ user }: Props) => {
	console.log(user);

	const nuser = {
		id: '60d0fe4f5311236168a10a1e',
		title: 'mr',
		firstName: 'Niklas',
		lastName: 'Baltzersen',
		picture: 'https://randomuser.me/api/portraits/med/women/66.jpg',
		gender: 'male',
		email: 'niklas.baltzersen@example.com',
		dateOfBirth: '1995-01-25T06:20:13.984Z',
		phone: '32509586',
		img: "https://images.unsplash.com/photo-1705750164473-c0efa38c6005?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8",
		location: {
			street: '4651, EnsjÃ¸svingen',
			city: 'Siljan',
			state: 'Finnmark - FinnmÃ¡rku',
			country: 'Norway',
			timezone: '+11:00'
		},
		registerDate: '2021-06-21T21:02:21.645Z',
		updatedDate: '2021-06-21T21:02:21.645Z'
	}

	return (
		<div className='border md:w-[calc(100vw-360px)] w-full'>
			<div className='bg-white justify-center flex flex-col items-center'>

				<div className='  max-w-[1250px] justify-center flex '>
					<div className='relative max-h-[462px] h-[calc((100vw)*40/100)] md:h-[calc((100vw-360px)*40/100)] rounded-b-xl  overflow-hidden'>

						{/* <Image className='object-cover rounded-b-lg' src={photoList[Math.floor(Math.random() * photoList.length)]} width={1250} height={1250} alt={user.firstName} /> */}
						<Image className='object-cover rounded-b-lg' src={nuser.img} width={1250} height={1250} alt={nuser.firstName} />
					</div>
				</div>
				<div className='flex justify-between  p-2 w-full max-w-[1250px] px-4 '>

					<div className='flex gap-4'>
						<div className='z-10 '>
							<Image src={nuser.picture} width={168} height={168} alt={nuser.firstName} className='rounded-full border-4 border-white   -mt-[72px]' />
						</div>
						<div>
							<div className='text-[32px] font-bold text-black mt-6'>{nuser.firstName} {nuser.lastName}</div>
							<div className='text-linkColor mt-4 hover:underline cursor-pointer '>299 friends</div>
						</div>
					</div>
					<div className='flex items-end py-4 gap-2'>
						<Button className='bg-main rounded-md  p-2 px-3 text-white flex items-center justify-center gap-2 text-[15px] cursor-pointer  font-medium'><FaUserPlus className='text-2xl' /> Add Friend</Button>
						<Button className='bg-btnGraybg rounded-md  p-2 px-3 text-black flex items-center justify-center gap-2 text-[15px] cursor-pointer hover:bg-iconBg  font-medium'><BiSolidMessageRoundedDetail className='text-2xl' /> Message</Button>
						<Button className='bg-btnGraybg rounded-md  p-2 px-3 text-black flex items-center justify-center gap-2 text-[15px] cursor-pointer hover:bg-iconBg  font-medium'><FaChevronDown className='text-2xl' /></Button>
					</div>
				</div>
				<div className=' w-full  flex justify-between px-4   max-w-[1250px]'>
					<div className='w-full  h-[2px] bg-[#ced0d4] flex justify-between   '>

					</div>
				</div>

			</div>
			<div className='bg-white justify-center flex flex-col items-center shadow'>
				<div className='  flex justify-between h-[60px] items-center p-2 w-full max-w-[1250px] px-4'>
					<div>
						<Button className='text-linkColor text-[15px] font-semibold hover:bg-[#f2f2f2] p-4 rounded-md '>Posts</Button>
						<Button className='text-linkColor text-[15px] font-semibold hover:bg-[#f2f2f2] p-4 rounded-md '>About</Button>
						<Button className='text-linkColor text-[15px] font-semibold hover:bg-[#f2f2f2] p-4 rounded-md '>Friends</Button>
						<Button className='text-linkColor text-[15px] font-semibold hover:bg-[#f2f2f2] p-4 rounded-md '>Photos</Button>
						<Button className='text-linkColor text-[15px] font-semibold hover:bg-[#f2f2f2] p-4 rounded-md '>Videos</Button>
						<Button className='text-linkColor text-[15px] font-semibold hover:bg-[#f2f2f2] p-4 rounded-md '>Check-ins</Button>
						<Button className='text-linkColor text-[15px] font-semibold hover:bg-[#f2f2f2] p-4 rounded-md '>More <FaCaretDown /></Button>
					</div>
					<div>
						<Button className='bg-btnGraybg text-xl font-semibold hover:bg-iconBg p-3  px-2 rounded-md '><BsThreeDots /></Button>
					</div>
				</div>
			</div>
			<div>
				<div className="justify-center flex flex-col items-center">
					<div className="flex justify-between items-center p-2 w-full max-w-[1250px] bg-white shadow">
						<Button className="	flex gap-2 items-center  p-2 rounded-lg hover:bg-btnGraybg">

							<div className="w-10 h-10 overflow-hidden rounded-full	flex justify-center items-center  ">

								<Image className='rounded-full ' src={nuser.picture} width={40} height={40} alt={nuser.firstName} />
							</div>
							<div className='text-[17px] font-semibold text-textBlack '>{nuser.firstName} {nuser.lastName}</div>

						</Button>
					</div>
				</div>
			</div>
			<div className="justify-center flex flex-col items-center">
				<div className="flex justify-between items-center p-2 w-full max-w-[1250px]">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, dignissimos sequi velit nesciunt et quasi? Velit odit, optio voluptates consequuntur corrupti nam aliquam amet blanditiis possimus sit quae quibusdam nesciunt hic ex accusantium consectetur voluptatem at consequatur in. Quisquam voluptatem magni aut ab architecto consequatur possimus, iure facilis maiores recusandae fuga pariatur minus sint qui maxime, ipsam facere quibusdam, laboriosam assumenda. Ab cumque possimus explicabo error iure et, aliquam dolore maiores illo vel illum nostrum fuga molestiae quae! Hic, voluptatem cum, animi reiciendis iure blanditiis veritatis voluptas recusandae, beatae nihil in libero modi incidunt quisquam quo culpa possimus ducimus voluptate quas maiores ipsum excepturi. Eos quisquam sed eaque? Facere, totam fugiat tempore soluta ratione fuga perspiciatis non ab tenetur reprehenderit harum hic expedita eligendi iste error animi consequuntur? Tenetur necessitatibus illum recusandae itaque, delectus quibusdam voluptatem vel magni aspernatur doloremque fugiat officia ea, pariatur odit, quaerat sed quas! Quas, delectus qui voluptates enim sit quidem aliquid illo, reiciendis voluptatibus quo et esse obcaecati. Quis quod vel deserunt? Commodi laborum ullam quas debitis voluptatem accusantium, accusamus, atque, fuga quisquam illo cupiditate culpa. Laudantium, voluptatibus debitis. Eaque debitis voluptatem est excepturi? Hic natus nobis dolores voluptate, cumque voluptatibus officia modi ex qui unde tenetur accusantium amet consectetur ea magnam consequatur! Odio nisi possimus repellat ipsam mollitia placeat praesentium odit amet sequi reiciendis? Sint facilis hic rem officiis ipsa enim excepturi vitae aliquid similique, ut itaque voluptatum. Maiores, atque natus perspiciatis accusantium possimus quo, quae voluptates eligendi id asperiores consequatur libero aliquam laborum odio rerum aut minus laboriosam velit alias voluptatem. Recusandae hic suscipit iure tempora minima qui, odit pariatur alias nihil enim, placeat sapiente quasi, culpa non quo quaerat impedit maiores fugiat harum quos commodi porro velit modi eligendi. Obcaecati at, odio dolorem assumenda explicabo minima ducimus quam perferendis, nam fugit repudiandae quas in, eius quasi aliquam similique quos! Nihil corrupti autem velit eum, distinctio consequatur deleniti veniam, est sint debitis dignissimos quo magnam quidem. Explicabo, deserunt illum! Impedit modi nemo in architecto omnis, quod, totam vero odit vel eaque quam fugiat. Possimus beatae, quaerat dolorem iure nam reprehenderit nobis ipsam aperiam natus incidunt delectus aspernatur minima et commodi ad perferendis quasi consequuntur eius totam officia dolore facilis. Labore, esse debitis rerum odit dolorum nulla ipsa in omnis sed dolores quibusdam neque unde tempore. Inventore distinctio minus recusandae repellat, quod dolorum cum quis rem ducimus quaerat rerum explicabo modi voluptatibus neque veritatis deleniti ex natus ratione ea architecto incidunt omnis a? Aliquam facere ducimus, corrupti sunt similique optio architecto odio sed quidem! Ullam inventore numquam temporibus soluta ipsum, sit totam repellat non molestias nihil aspernatur ab repellendus cum porro eveniet id, minus veniam deserunt earum. Velit corporis nihil nemo ad quos quas consequuntur sed alias dolores impedit explicabo animi iste officia sunt, iusto ullam. Accusantium expedita illum velit animi numquam minima! Perspiciatis amet impedit quis dolorum nemo nihil corporis sit, officiis aspernatur exercitationem eaque totam minus autem ducimus esse adipisci commodi iusto explicabo eum corrupti illum nulla? Totam facere laboriosam qui vitae impedit officia ipsa sequi illum! Reiciendis vitae distinctio eum praesentium dicta hic, unde laborum sed autem minus molestias quod ipsa, natus, commodi ipsum repudiandae. Repellendus accusamus facilis magni unde labore vero, cupiditate nostrum velit reprehenderit, tempore dignissimos eos voluptatibus asperiores nulla sit autem! Tempore corporis hic, molestiae ducimus voluptatem quisquam quos, exercitationem autem modi ipsa accusamus eum architecto provident natus, recusandae at sequi? Eaque rerum quibusdam, a veniam minus consectetur tempora sunt magni vero explicabo ducimus laudantium natus. Cupiditate aut nesciunt voluptatum, necessitatibus quisquam est commodi labore asperiores aspernatur id maiores culpa sed sint ipsa qui dolorum eaque quis quidem? Facere soluta nemo tempore numquam et rem cupiditate debitis porro dolores consequatur! Quas explicabo deserunt accusantium dolores, aliquam distinctio ipsam magnam fugiat nobis eaque recusandae doloremque pariatur iure assumenda expedita molestias, id fugit nemo? Harum officiis asperiores praesentium, est aspernatur tempore assumenda possimus voluptates facilis veritatis nostrum recusandae! Nihil voluptatem cumque ut porro eligendi nam neque dolores error? Delectus doloremque dolorum sed est. Cum qui saepe quis nesciunt autem iste dolorum id suscipit hic laudantium dicta nisi aliquam, praesentium dolorem optio doloribus quisquam ea enim quasi molestias tempora esse. In neque officiis error reiciendis labore voluptatibus ab, praesentium soluta, iste facilis atque necessitatibus deserunt tenetur quam illo, nobis sint odio a reprehenderit magni! Veniam non cumque perferendis officia natus iure labore, molestias corporis nobis magni minima. Similique vitae ab ut, suscipit distinctio nisi modi sapiente recusandae ea perferendis obcaecati laudantium voluptatem deserunt, dignissimos repellat aliquam minus. Unde cumque numquam nisi odit, dolor, modi consequatur harum magni alias nulla omnis voluptate reprehenderit! At ipsam consequatur labore velit nostrum. In modi esse cumque nihil aliquam. Minima possimus praesentium eos laudantium. Minus aspernatur debitis corrupti? Deleniti error omnis, ipsa eaque recusandae ipsam perspiciatis! Sit dolorem aliquid vel odit eaque porro consectetur impedit molestiae voluptas libero ratione asperiores qui earum cum atque laboriosam, itaque excepturi iusto ea ipsa. Expedita recusandae cum minima, minus alias quam quos quas. Aperiam, ea error vel voluptate amet quo nulla rem nisi aliquid consequuntur cumque maiores corporis recusandae officiis. Eum asperiores veritatis ducimus minus labore iure aut voluptatibus quas, cupiditate unde omnis voluptatem temporibus enim consequatur sequi ipsum facere odit veniam ab magni. Quam dolorem velit neque dignissimos voluptatibus ab eum nobis quaerat commodi, expedita accusantium minima quis laboriosam nihil est error adipisci sit laudantium autem corrupti ratione. Possimus tenetur veniam, molestiae consequatur accusamus eaque sequi esse? Explicabo qui alias, facere mollitia iste placeat deleniti veritatis facilis laudantium ratione perferendis expedita vel dignissimos iusto architecto. Nam, aperiam praesentium libero non veniam minus eaque dolore facilis fugiat, possimus impedit doloribus adipisci assumenda enim error fugit odio recusandae soluta tempora maiores! Quaerat similique dolorem explicabo laboriosam, rem, labore voluptate inventore aperiam laudantium assumenda id ipsa commodi dolores tenetur nostrum amet distinctio in! Repellat nulla inventore quam quibusdam quas, mollitia eaque omnis aliquam. Mollitia distinctio natus cupiditate fugiat voluptatum, aliquid itaque dicta asperiores obcaecati facilis numquam quaerat molestias hic illum minima at animi quo deleniti sit odit. Laboriosam voluptatibus totam ducimus ea!
				</div>
			</div>
		</div >
	)
}

export default ProfileDetail