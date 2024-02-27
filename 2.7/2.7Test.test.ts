import { pageObject } from "./2.7PageObject";
const page = new pageObject(); 

class Intern {
   //create a class for interns that includes the name phone and title for the intern.
   name: string;
   phone: number;
   title: string;

      constructor(name: string, phone: number, title: string) {
         this.name = name;
         this.phone = phone;
         this.title = title;
      };
}; 

let newInterns: Array<Intern> = [
   //create an array of Interns using your class 
   new Intern("Michael Scott", 8019831234, "Manager"),
   new Intern("Jim Halpert", 8909432345, "Sales"),
   new Intern("Dwight Schrute", 8013455789, "Sales"),
   new Intern("Kevin Malone", 7893472349, "Accounting")
];

let addInterns = async (newInterns) => {
   //create a function to add the interns from your array
   await page.click(page.addEm);
   await page.click(page.newEm);
   await page.setInput(page.namInp, newInterns.name);
   await page.setInput(page.phoInp, newInterns.phone);
   await page.setInput(page.titleInp, newInterns.title);
   await page.click(page.saveBtn);
   await page.driver.sleep(20);
};

test('can add the office team',async () => {
    await page.navigate(); 
    await page.getElement(page.addEm); 
    for(let i= 0; i < newInterns.length; i ++){
        await addInterns(newInterns[i]); 
    }; 
    await page.driver.quit(); 
})