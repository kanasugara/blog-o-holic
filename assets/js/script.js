import React from 'react';
import ReactDOM from 'react-dom';

import '../css/fonts.css'
import '../css/styles.css'

import Header from './pages/Header';
import MainContainer from './pages/mainContainer';
import NewPostPage from './pages/NewPostPage';
import PostPage from './pages/postPage';


var POST = [
    {
        "id" : 1,
        "title" : "Сорок років у пустелі",
        "mainTxt" : `Мені не потрібен ваш Прометей, якщо він принесе вогонь – його хату спалять, а його самого відправлять десь на Сибір, Соловки чи Освєнцим. 
Великий Брат піклується про свій народ, і не тільки про свій. І не тільки про народ. 
А і свій інформаційний простір, його побут, думки і записи в щоденниках. 
Мені не потрібен Мойсей, який би 40 років вибивав із мене дух рабства, роблячи мене святою, себто вільною. 
Такого Мойсея посадять за те, що він чекає манни небесної, а не кричить під червоними прапорами «Слава робочому класу!». 
Ця кривава і затяжна зима розставила все на свої місця, вона оголила справжні обличчя можновладців, які не поміщаються в екрани телевізорів. 
Ця зима оголила мої нерви, від чого в мене тепер приступи справжньої фізичної нудоти, коли слухаю цих кухонних експертів з політики. 
Які голосно кричать і рвуть глотки про те, що вони все знають, що їм треба мир і стріляти вони не будуть, бо то не гуманно. 
Якби тут був Мойсей, він би вже почав збирати клунки. 23-оьх років виявилось замало для цього народу, аби зрозуміти, що це його карма – кістьми доводити своє право на існування. 
І винен в цьому не Великий брат, а сам народ, який дозволяє так до себе ставитись. Який не окреслив свої кордони настільки чітко, що ні в кого і не виникало би сумнівів. 
Який залишив практично у кожному своєму місті Вождя, який нарешті спрацював, як бомба уповільненої дії. 
Який з раннього дитинства говорив про велику і спільну історію. Більшість цього народу так і залишилась за примарною залізною завісою, так і не виїхавши за межі «своєї крайньої хати». 
Більшість цього народу так і залишилась байдужою до самого себе. Цей народ вмів бути тільки приниженим, його вчили бути вдячним за владу, яка від бога, але не від церкви. 
Молоде покоління не знало крові і боротьби, тому свідомо лізло під кулі. Свято вірячи, що там є місце українському патріотизму, націоналізму і світлому майбутньому. 
Вони боялися собі уявити, що буде, коли її не стане. Вони билися за неї, вмирали за неї, поки ви запарювали свій час. 
Коли це все закінчиться, крім руїн ми ще матимемо, втрачену генерацію молодого покоління, яке не знатиме, де їхнє місце і чи є воно взагалі. 
Теж продаватимуть чорні обеліски? Теж отримуватимуть зарплату двічі на день і мріятимуть купити нову краватку? 
Це покоління дивитиметься порожніми очима на політичні баталії, на «кулі в лоба», на «цю землю можна їсти», на «пишаюсь, що українець», і наливатиме нову чарку. 
Бо більше немає, що робити. Хіба вити від горя, але тим краще нікому не зробиш. А в холодильнику крім пляшки польської горілки та вишень більше нічого немає. 
Ці хлопці повернуться. Їхні блукання в пустелі закінчаться трохи раніше. І вони виглядатимуть дуже недоречно на всіх наших світах потім. 
Вони і далі говоритимуть мовою, яку ніхто не буде розуміти. Вони і далі житимуть в країні, за яку вони віддали, якщо не життя, то всього себе, або по частинах. 
Своє громадянство вони ховатимуть по кишенях, аби ніхто не побачив. Цим солдатам будуть розповідати про війну, постріли та обов’язок, їх будуть тикати носом у те, чого вони наїлися. 
Нове покоління втрачених героїв залишиться невідомим нікому. Нікому не потрібні їхні історії, якщо про них не можна відзняти сюжет. 
Якщо їх не було в медіа, їх не існувало в принципі. Війна зробила їх вигнанцями і старими у 21. Нікому не потрібні їх болі і страхи, з якими вони билися щодня. 
Всім потрібні подвиги, всім потрібні двохметрові бургегри і кока-кола. І якщо між вас десь є Мойсей, будь ласка, залиш цей народ в спокої. 
Він не готовий блукати і чекати на манну небесну. Він починає самоусвідомлюватись в контексті цих кривавих революцій. 
Пане Мойсею, пустелі нам не потрібно. В нас є своя земля обітована. В нас є свої клумки, в нас є своя віра, в нас є свій буремний Схід і тяжка пам'ять.`,
        "contextMin" : "Почнемо з того, що 9 травня, як День Перемоги святкують країни, що входила до складу СРСР. Генеральна Асамблея ООН у 2004 році оголосила 8 та 9 травня Днями пам’яті та примиреннями. В українському законодавстві День Перемоги визначається як «торжество безсмертного подвигу народу – переможця над фашизмом, всенародної пам’яті про боротьбу за свободу і незалежність Батьківщини». Зупинимось на двох основних моментах, «подвиг народу» - про який народ іде мова? Можливо, варто було би врахувати той ...",
        "mainBg" : "../../img/post_2",
        "time" : "26/02",
        "tags" : ""
    }
    ]

class Layout extends React.Component {
	onPostAdd(data){
		console.log(data);
	}
       render() {
           return( 
               <div>
            		<Header />
            		<NewPostPage onPostAdd={this.handlePostAdd} />
            	</div>
	    );
    }
}

ReactDOM.render(<Layout />, document.getElementById('app'));

 // {
 //                    POST.map( post => 
 //                        <PostPage 
 //                            key = {post.id}  
 //                            title = {post.title} 
 //                            mainTxt = {post.mainTxt}
 //                            mainBg = {post.mainBg}
 //                        	/>
	//                     )
	//                 }