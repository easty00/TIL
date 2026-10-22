public class TeacherApp {
  public static void main(String[] args) {

    // App 에서 Teacher.java에 만든 구성요소에 접근하게 함.
    // 이를 위한 객체 생성이 필요함

    // 참조타입
    Teacher tea = new Teacher() ;   
    // 객체생성 코드. tea 에 생성된 객체의 주소값이 담겨 변수로 정의됨
    // new Teacher() ;

    tea.name = "easty00" ;
    System.out.println(tea.name) ;
    tea.eating() ;
    String result = tea.teaching("자바") ; //teaching이 실행되어 출력되는 변수값을 result에 할당
    System.out.println(result) ;
    
  }

}
