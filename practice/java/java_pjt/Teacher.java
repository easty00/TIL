public class Teacher {
  
  public String  name ;
  public int     age ;
  public String  address ;
  public boolean isMarraige ;

  public void eating() {
    System.out.println("강의하기 위해서 밥을 먹는다.") ;
  }

  public String teaching(String subject) {
    return "강사님이 가르치는 과목은 "+subject+" 입니다." ;
  } // 문자열을 담은 메서드. 문자열에 반환 타입에 해당하는 값 반환 + 문자열에 변수 연결


}
// main메서드가 없는 클래스 : instance를 만들기 위한 템플릿 용도