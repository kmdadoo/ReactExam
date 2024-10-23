/*
    Composition 방법과 Inheritance
    Composition : 구성. 여러개의 컴퍼넌트를 합쳐서 새로운 컴퍼넌트를 만드는 것
        합성이라는 뜻에 더 가까움.
        Containment : 방지, 견제. 하위 컴퍼넌트를 포함하는 형태의 합성 방법.
            Sidebar나 Dialog 같은 Box 형태의 컴퍼넌트는 자신의 하위 컴퍼넌트를
            미리 알 수 없다.
        Specialization(전문화, 특수화) : WelcomeDialog는 Dialog의 특별한 케이스
            이다. 이처럼 범용적인 개념을 구별이 되게 구체화 하는 것.
            리엑트에서는 합성을 사용하여 Specialization 구현한다!
    Inheritance(상속) : 다른 컴퍼넌트로부터 상속을 받아서 새로운 컴퍼넌트를 
        만드는 것. 잘사용하지 않음
    복잡한 컴퍼넌트를 쪼개서 여러개의 컴퍼넌트로 만들고, 만든 컴퍼넌트들을 조합
    해서 새로운 컴퍼넌트를 만들자!
*/
import Card from "./Card";

function ProfileCard(props) {
    return (
        // <p> 태크로 되어 있는 것이 children으로 전달됨.
        /*
            여러개의 children집합이 필요한 경우는 어덯게 할까?
            - 별도로 props를 정의해서 각가 원하는 컴퍼넌트를 넣어 주면 됩니다.
        */
       // Composition 에서 title이 Specialization이고 <p> 안이 Containment이다.
        <Card title="Inje Lee" backgroundColor="#4ea04e">
            <p>안녕하세요, 소플입니다.</p>
            <p>저는 리액트를 사용해서 개발하고 있습니다.</p>
        </Card>
    );
}

export default ProfileCard;
