import { test, expect, Page, Locator } from '@playwright/test';


export class MedicalAndDentalPageMsg {
  private readonly page: Page;
  readonly zipCodeLocator: Locator;
  readonly firstNameLocator: Locator;
  readonly lastNameLocator: Locator;
  readonly birthDateLocator: Locator;
  readonly genderLocator: Locator;
  readonly childGenderLocator: Locator;
  readonly smokerLocator: Locator;
  readonly dependentFirstNameLocator: Locator;
  readonly dependentLastNameLocator: Locator;
  readonly dependentBirthDateLocator: Locator;
  readonly relationshipLocator: Locator;
  readonly emailLocator: Locator;
  readonly childSmokerLocator: Locator;
  readonly userIdLocator: Locator;
  readonly passwordLocator: Locator;
  readonly confirmPasswordLocator: Locator;
  readonly securityQuestionLocator: Locator;
  readonly answerLocator: Locator;
  readonly addressLocator: Locator;
  readonly cityLocator: Locator;
  readonly phoneLocator: Locator;
  readonly creditCardFirstNameLocator: Locator;
  readonly creditCardLastNameLocator: Locator;
  readonly applicantFirstNameLocator: Locator;
  readonly applicantLastNameLocator: Locator;
  readonly confirmFirstNameLocator: Locator;
  readonly confirmLastNameLocator: Locator;
  readonly dependentlastFirstNameLocator: Locator;
  readonly dependentlastLastNameLocator: Locator;
  readonly confirmlastFirstNameLocator: Locator;
  readonly confirmlastLastNameLocator: Locator;


  constructor(page: Page) {
    this.page = page;
    this.zipCodeLocator = this.page.locator('#zipCode29');
    this.firstNameLocator = this.page.locator('#firstName22');
    this.lastNameLocator = this.page.locator('#lastName23');
    this.birthDateLocator = this.page.locator('#birthDate24');
    this.genderLocator = this.page.locator('#gender26');
    this.childGenderLocator = this.page.locator('#gender42');
    this.smokerLocator = this.page.locator('#isSmoker27');
    this.dependentFirstNameLocator = this.page.locator('#firstName38');
    this.dependentLastNameLocator = this.page.locator('#lastName39');
    this.dependentBirthDateLocator = this.page.locator('#birthDate40');
    this.relationshipLocator = this.page.locator('#memberRelationship41');
    this.childSmokerLocator = this.page.locator('#isSmoker43')
    this.emailLocator = this.page.locator('#priorToApplyingForm_priorToApplyingInfo_userProfile_user_emailAddress');
    this.userIdLocator = this.page.locator('#priorToApplyingForm_priorToApplyingInfo_registrationInfo_userId');
    this.passwordLocator  = this.page.locator('#priorToApplyingForm_priorToApplyingInfo_registrationInfo_password');
    this.confirmPasswordLocator = this.page.locator('#priorToApplyingForm_priorToApplyingInfo_registrationInfo_confirmPassword');
    this.securityQuestionLocator = this.page.locator('#secretQuestion');
    this.answerLocator = this.page.locator('#secretAnswer');
    this.addressLocator = this.page.locator('input[name="Application\\.Applicant\\.Address_1"]');
    this.cityLocator = this.page.locator('input[name="Application\\.Applicant\\.City"]');
    this.phoneLocator = this.page.locator('input[name="Application\\.Applicant\\.Home_Phone"]');
    this.creditCardFirstNameLocator = this.page.locator('input[name="Application\\.Initial_Credit_Card\\.Cardholder_First_Name"]');
    this.creditCardLastNameLocator = this.page.locator('input[name="Application\\.Initial_Credit_Card\\.Cardholder_Last_Name"]');

    this.applicantFirstNameLocator = this.page.locator('xpath=//*[@id="FEL7A2G131FBE0C2FEEE6AF"]/input');
    this.applicantLastNameLocator = this.page.locator('xpath=//*[@id="FELFD33577A9E4G96BE8B90"]/input');
    this.confirmFirstNameLocator = this.page.locator('xpath=//*[@id="FEL4B94981349E349AB87D0"]/input');
    this.confirmLastNameLocator = this.page.locator('xpath=//*[@id="FEL724112553A139F8A1BG1"]/input');

    this.dependentlastFirstNameLocator = this.page.locator('xpath=//*[@id="FEL67FD2946B66D58FG90CF[0]"]/input');
    this.dependentlastLastNameLocator = this.page.locator('xpath=//*[@id="FEL7907578F5G81046DED53[0]"]/input');
    this.confirmlastFirstNameLocator = this.page.locator('xpath=//*[@id="FEL3EE604913BAGF3271B05[0]"]/input');
    this.confirmlastLastNameLocator = this.page.locator('xpath=//*[@id="FEL244C43E59CEB75G42504[0]"]/input');
    }
    async navigateToWelcomePage() {
  //await this.page.goto('http://hpmssiat1:8180/hp/shopping/anonymous.html?#welcome');
    await this.page.goto('https://individualinsurance-stg.healthpartners.com/hp/shopping/anonymous.html#welcome');
    await this.page.waitForLoadState('networkidle');
  }

  async clickGetStartedLink() {
    await this.page.getByRole('link', { name: 'Get started' }).click();
    await this.page.waitForLoadState('networkidle');
  }

  async SeeIfYouQualify() {
      
    await this.page.getByRole('link', { name: 'See if you qualify' }).click(),{ timeout: 30000 };
    await this.page.getByText('Birth of child, adoption of').click();
    await this.page.getByLabel('Enter the date of your event:').click();
    await this.page.getByRole('cell', { name: '2', exact: true }).first().click();
    await this.page.getByRole('checkbox').check();
  }

  async seeIfYouQualify_OE() {
      
    await this.page.getByRole('link', { name: 'Skip & Shop Plans' }).click(),{ timeout: 30000 };
   
  }

  async saveAndContinue(){

    await expect(async () => {
      await this.page.getByRole('link', { name: "SAVE & CONTINUE" }).click()
      //await expect(this.page).toHaveURL("http://hpmssiat1:8180/hp/shopping/anonymous.html?#view/account/WhosCoveredSE/Demographics")
      await expect(this.page).toHaveURL("https://individualinsurance-stg.healthpartners.com/hp/shopping/anonymous.html#view/account/WhosCoveredSE/Demographics")

      }).toPass()
  }
  

  async fillZipCode(zipCode: string) {
    await this.zipCodeLocator.waitFor({ state: 'visible' });
    await this.zipCodeLocator.fill(zipCode);
  }

  async fillFirstName() {
    await this.firstNameLocator.click();
    await this.firstNameLocator.fill('TestAuto');
  }

  async fillLastName(lastName: string) {
    await this.lastNameLocator.click();
    await this.lastNameLocator.fill(lastName);
  }

  async fillBirthDate(birthDate: string) {
    await this.birthDateLocator.click();
    await this.birthDateLocator.fill(birthDate);
  }

  async selectGender(gender: string) {
    await this.genderLocator.selectOption(gender);
  }

  async selectSmokerOption(option: string) {
    await this.smokerLocator.click();
    await this.smokerLocator.selectOption(option);
  }

  async clickAddDependentLink() {
    await this.page.getByRole('link', { name: 'Add Dependent' }).click();
    await this.page.waitForLoadState('networkidle');
  }

  async fillDependentFirstName(firstName: string) {
    await this.dependentFirstNameLocator.click();
    await this.dependentFirstNameLocator.fill(firstName);
  }

  async fillDependentLastName(lastName: string) {
    await this.dependentLastNameLocator.click();
    await this.dependentLastNameLocator.fill(lastName);
  }

  async fillDependentBirthDate(birthDate: string) {
    await this.dependentBirthDateLocator.click();
    await this.dependentBirthDateLocator.fill(birthDate);
  }

  async selectDependentRelationship(relationship: string) {
    await this.relationshipLocator.selectOption(relationship);
  }

  async selectDependentGender(gender: string) {
    await this.childGenderLocator.selectOption(gender);
  }

  async selectSmokerOptionForDepandant(option: string) {
    await this.childSmokerLocator.click();
    await this.childSmokerLocator.selectOption(option);
  }

  async clickAddDependentLink1() {
    await this.page.getByRole('link', { name: 'Add Dependent' }).click();
    await this.page.waitForLoadState('networkidle');
    await this.page.locator('#firstName56').click();
    await this.page.locator('#firstName56').fill('FirstChild');
    await this.page.locator('#lastName57').click();
    await this.page.locator('#lastName57').fill('Lastnamechildone');
    await this.page.locator('#birthDate58').click();
    await this.page.locator('#birthDate58').fill('01/01/2010');
    await this.page.locator('#memberRelationship59').click();
    await this.page.locator('#memberRelationship59').selectOption('CHILD');
    await this.page.locator('#gender60').click();
    await this.page.locator('#gender60').selectOption('Female');
    //await this.page.locator('#isSmoker61').click();
   // await this.page.locator('#isSmoker61').selectOption('NO');

 }

 async clickAddDependentLink2() {
    await this.page.getByRole('link', { name: 'Add Dependent' }).click();
    await this.page.waitForLoadState('networkidle');
    await this.page.locator('#firstName80').click();
    await this.page.locator('#firstName80').fill('SecondChild');
    await this.page.locator('#lastName81').click();
    await this.page.locator('#lastName81').fill('Lastnamechildtwo');
    await this.page.locator('#birthDate82').click();
    await this.page.locator('#birthDate82').fill('01/01/2012');
    await this.page.locator('#memberRelationship83').click();
    await this.page.locator('#memberRelationship83').selectOption('CHILD');
    await this.page.locator('#gender84').click();
    await this.page.locator('#gender84').selectOption('M');
    //await this.page.locator('#isSmoker85').click();
    //await this.page.locator('#isSmoker85').selectOption('NO');

 }

 async clickAddDependentLink3() {
    await this.page.getByRole('link', { name: 'Add Dependent' }).click();
    await this.page.waitForLoadState('networkidle');
    await this.page.locator('#firstName110').click();
    await this.page.locator('#firstName110').fill('ThirdChild');
    await this.page.locator('#lastName111').click();
    await this.page.locator('#lastName111').fill('Lastnamechildthree');
    await this.page.locator('#birthDate112').click();
    await this.page.locator('#birthDate112').fill('01/01/2014');
    await this.page.locator('#memberRelationship113').click();
    await this.page.locator('#memberRelationship113').selectOption('CHILD');
    await this.page.locator('#gender114').click();
    await this.page.locator('#gender114').selectOption('F');
    //await this.page.locator('#isSmoker115').click();
    //await this.page.locator('#isSmoker115').selectOption('NO');

 }

 async clickAddDependentLink4() {
    await this.page.getByRole('link', { name: 'Add Dependent' }).click();
    await this.page.waitForLoadState('networkidle');
    await this.page.locator('#firstName146').click();
    await this.page.locator('#firstName146').fill('FourthChild');
    await this.page.locator('#lastName147').click();
    await this.page.locator('#lastName147').fill('Lastnamechildfour');
    await this.page.locator('#birthDate148').click();
    await this.page.locator('#birthDate148').fill('01/01/2016');
    await this.page.locator('#memberRelationship149').click();
    await this.page.locator('#memberRelationship149').selectOption('CHILD');
    await this.page.locator('#gender150').click();
    await this.page.locator('#gender150').selectOption('M');
    //await this.page.locator('#isSmoker151').click();
    //await this.page.locator('#isSmoker151').selectOption('NO');

 }
  

  async clickContinueLink() {
    await this.page.getByRole('link', { name: 'Continue' }).click();
    await this.page.waitForLoadState('networkidle');
  }
  
  async selectBrowseAllPlans () {

    await this.page.getByRole('link', { name: 'Browse all plans' }).click();
    await this.page.waitForLoadState('networkidle');
    
  }

  async addToCart () {
  await this.page.getByRole('link', { name: 'Add to cart' }).first().click();
  await this.page.getByRole('link', { name: 'View Cart & Enroll' }).click();
  await this.page.getByRole('link', { name: 'Continue Shopping' }).click();
  await this.page.waitForTimeout(2000);
  await this.page.getByRole('combobox').first().selectOption('prod_dental');
  await this.page.waitForTimeout(3000);
  // await this.page.locator('div').filter({ hasText: /^\$186\.99\/ moAdd to cart$/ }).getByRole('link').click();
  await this.page.getByRole('link', { name: 'Add to cart' }).first().click();



  }

  async viewCartAndEnroll () {

    await this.page.getByRole('link', { name: 'View Cart & Enroll' }).click();
    await this.page.waitForLoadState('networkidle');
  }

  async enrollNow () {

    await this.page.getByRole('link', { name: 'Enroll Now' }).click();
    await this.page.waitForLoadState('networkidle');
  }

  async fillEmailAddress() {
    await this.emailLocator.click();
    await this.emailLocator.fill('icarsstagealerts@healthpartners.com');
  }

  async userIDAndPassword(id: string){
    await this.userIdLocator.click();
    await this.userIdLocator.fill(id);
    await this.passwordLocator.click();
    await this.passwordLocator.fill('QAtest1234');
    await this.confirmPasswordLocator.click();
    await this.confirmPasswordLocator.fill('QAtest1234');
    console.log("Unique Username:", id);
}
async securityQuestionAndBroker(answer: string) {
  await this.securityQuestionLocator.selectOption('What was your childhood nickname?');
  await this.answerLocator.click();
  await this.answerLocator.fill(answer);
  await this.page.getByLabel('No').check();    
  await this.page.getByRole('link', { name: 'Continue ' }).click();
}

  async startEnrolment(address: string, city: string, phone: string, SSN: string){
    await this.page.getByRole('link',{ name: 'Start enrollment'}).click();
    await this.page.waitForLoadState('networkidle');
    await this.addressLocator.click();
    await this.addressLocator.fill(address);
    await this.cityLocator.click();
    await this.cityLocator.fill(city);
    await this.phoneLocator.click();
    await this.phoneLocator.fill(phone);
    // await this.page.getByRole('textbox', { name: '###-##-####' }).click()
    // await this.page.getByRole('textbox', { name: '###-##-####' }).fill('123451111');
    await this.page.getByRole('textbox', { name: '###-##-####' }).click()
    console.log("Unique SSN:", SSN);
    await this.page.getByRole('textbox', { name: '###-##-####' }).fill(SSN);
    await this.page.getByLabel('No, not of Hispanic, Latino/a').check();
    await this.page.getByLabel('White').check();
    await this.page.getByLabel('American Indian or Alaska').check();
      const checkboxes = await this.page.$$('input[type="checkbox"]');
      for (const checkbox of checkboxes) {
        const isChecked = await checkbox.isChecked();
        if (isChecked) {
            const value = await checkbox.evaluate((node) => (node as HTMLInputElement).value);
            console.log("Ethnicity and Race selected: ", value);
        }
    }
    await this.page.getByRole('link', { name: 'Continue ' }).click();
  }

async familyMembers(){
  
  // await this.page.getByLabel('No, not of Hispanic, Latino/a').first().check();

   await this.page.locator('input[name="Application\\.Dependent\\[0\\]\\.Middle_Initial"]').click();
   await this.page.locator('[id="FEL52994447A65BE2D4283F\\[0\\]"] > .radioFields > div').first().click();
  await this.page.locator('input[name="Application\\.Dependent\\[0\\]\\.SSN_Not_Required"]').check();
   await this.page.locator('input[name="Application\\.Dependent\\[0\\]\\.Ethnicities"]').first().check();
   await this.page.locator('input[name="Application\\.Dependent\\[0\\]\\.Races"]').first().check();
   await this.page.locator('input[name="Application\\.Dependent\\[0\\]\\.Races"]').nth(3).check();
   
  //child1 member info
  await this.page.locator('input[name="Application.Dependent[1].Middle_Initial"]').click();
  await this.page.locator('[id="FEL52994447A65BE2D4283F\\[1\\]"] > .radioFields > div > .radio-choice-label').first().click();
  await this.page.waitForLoadState('networkidle');
  await this.page.locator('input[name="Application.Dependent[1].SSN_Not_Required"]').check();
  await this.page.locator('input[name="Application.Dependent[1].Ethnicities"]').first().check();
  await this.page.locator('input[name="Application.Dependent[1].Races"]').first().check();
  await this.page.locator('input[name="Application.Dependent[1].Races"]').nth(3).check();
  //child2 member info
  await this.page.locator('input[name="Application.Dependent[2].Middle_Initial"]').click();
  await this.page.locator('[id="FEL52994447A65BE2D4283F\\[2\\]"] > .radioFields > div > .radio-choice-label').first().click();
  await this.page.waitForLoadState('networkidle');
  await this.page.locator('input[name="Application.Dependent[2].SSN_Not_Required"]').check();
  await this.page.locator('input[name="Application.Dependent[2].Ethnicities"]').first().check();
  await this.page.locator('input[name="Application.Dependent[2].Races"]').first().check();
  await this.page.locator('input[name="Application.Dependent[2].Races"]').nth(3).check();
  
  //child3 member info
  await this.page.locator('input[name="Application.Dependent[3].Middle_Initial"]').click();
  await this.page.locator('[id="FEL52994447A65BE2D4283F\\[3\\]"] > .radioFields > div > .radio-choice-label').first().click();
  await this.page.waitForLoadState('networkidle');
  await this.page.locator('input[name="Application.Dependent[3].SSN_Not_Required"]').check();
  await this.page.locator('input[name="Application.Dependent[3].Ethnicities"]').first().check();
  await this.page.locator('input[name="Application.Dependent[3].Races"]').first().check();
  await this.page.locator('input[name="Application.Dependent[3].Races"]').nth(3).check();

  //child4 member info
  await this.page.locator('input[name="Application.Dependent[4].Middle_Initial"]').click();
  await this.page.locator('[id="FEL52994447A65BE2D4283F\\[4\\]"] > .radioFields > div > .radio-choice-label').first().click();
  await this.page.waitForLoadState('networkidle');
  await this.page.locator('input[name="Application.Dependent[4].SSN_Not_Required"]').check();
  await this.page.locator('input[name="Application.Dependent[4].Ethnicities"]').first().check();
  await this.page.locator('input[name="Application.Dependent[4].Races"]').first().check();
  await this.page.locator('input[name="Application.Dependent[4].Races"]').nth(3).check();
  await this.page.getByRole('link', { name: 'Continue ' }).click();
  

}

async planInformation(){

  await this.page.locator('div:nth-child(2) > .radio-choice-label').first().click();
  await this.page.locator('[id="FEL443E7861B61772D48A61\\[0\\]"] > .radioFields > div:nth-child(2)  > .radio-choice-label').click();
  await this.page.locator('[id="FEL443E7861B61772D48A61\\[1\\]"] > .radioFields > div:nth-child(2)  > .radio-choice-label').click();
  await this.page.locator('[id="FEL443E7861B61772D48A61\\[2\\]"] > .radioFields > div:nth-child(2)  > .radio-choice-label').click();
  await this.page.locator('[id="FEL443E7861B61772D48A61\\[3\\]"] > .radioFields > div:nth-child(2)  > .radio-choice-label').click();
  await this.page.locator('[id="FEL443E7861B61772D48A61\\[4\\]"] > .radioFields > div:nth-child(2)  > .radio-choice-label').click(); 

 await this.page.getByRole('link', { name: 'Continue ' }).click();
}

async uploadFile() {

  await this.page.getByRole('textbox').setInputFiles('./dummy.pdf');
  await this.page.getByRole('link', { name: 'Continue ' }).click();
}

async paymentOptions(lastName: string) {

  await this.page.getByRole('radio', { name: 'NO', exact: true }).check();
  await this.page.getByLabel('No, I prefer to get and pay').check();
  await this.page.getByLabel('Credit/Debit Card').check(); 
  await this.creditCardFirstNameLocator.click();
  await this.creditCardFirstNameLocator.fill('TESTAUTO');
  await this.creditCardLastNameLocator.click();
  await this.creditCardLastNameLocator.fill(lastName);
  await this.page.getByLabel('Visa').check();
  await this.page.locator('input[name="Application\\.Initial_Credit_Card\\.CC_Number"]').click();
  await this.page.locator('input[name="Application\\.Initial_Credit_Card\\.CC_Number"]').fill('4111111111111111');
  await this.page.getByPlaceholder('mm/yyyy').click();
  await this.page.getByPlaceholder('mm/yyyy').fill('10/2030');
  await this.page.locator('div').filter({ hasText: /^Yes$/ }).click();
  await this.page.getByRole('link', { name: 'Continue ' }).click();
}
async verifySubmission() {
  
  await this.page.getByRole('link', { name: 'Continue ' }).click();
}

async  submitForm(lastName: string,dependentFirstName: string,depenedentLastName: string){
  await this.page.locator('[id="FEL5GEG3280BA3E9E02F2F7"] > .checkBoxFields > .checkBox-option-div > .checkBox-choice-label').click();
  await this.page.locator('[id="FELB1CF3ED4217454BBCE80"] > .checkBoxFields > .checkBox-option-div > .checkBox-choice-label').click();
  await this.applicantFirstNameLocator.click();
  await this.applicantFirstNameLocator.fill('TestAuto');
  await this.applicantLastNameLocator.click();
  await this.applicantLastNameLocator.fill(lastName);
  await this.confirmFirstNameLocator.click();
  await this.confirmFirstNameLocator.fill('TestAuto');
  await this.confirmLastNameLocator.click();
  await this.confirmLastNameLocator.fill(lastName); 

  await this.page.locator('[id="FELF9D8FF6641089F0AGEBB\\[0\\]"] > .checkBoxFields > .checkBox-option-div > .checkBox-choice-label').click();
  await this.page.locator('[id="FEL93E3E98EBDGD65D14937\\[0\\]"] > .checkBoxFields > .checkBox-option-div > .checkBox-choice-label').click();
  await this.dependentlastFirstNameLocator.click();
  await this.dependentlastFirstNameLocator.fill(dependentFirstName);
  await this.dependentlastLastNameLocator.click();
  await this.dependentlastLastNameLocator.fill(depenedentLastName);
  await this.confirmlastFirstNameLocator.click();
  await this.confirmlastFirstNameLocator.fill(dependentFirstName);
  await this.confirmlastLastNameLocator.click();
  await this.confirmlastLastNameLocator.fill(depenedentLastName); 
  // await this.page.getByRole('group', { name: 'Electronic Signature -- toolset interface' }).getByLabel('I agree with the terms and').check();
  // await this.page.getByRole('group', { name: 'Electronic Signature -- toolset interface' }).getByLabel('I understand that I, or those').check();
  // await this.page.getByRole('group', { name: 'Electronic Signature -- toolset interface' }).locator('input[name="Application\\.Dependent\\[0\\]\\.Signature\\.First_Name"]').click();
  // await this.page.getByRole('group', { name: 'Electronic Signature -- toolset interface' }).locator('input[name="Application\\.Dependent\\[0\\]\\.Signature\\.Last_Name"]').click();
  // await this.page.getByRole('group', { name: 'Electronic Signature -- toolset interface' }).locator('input[name="Application\\.Dependent\\[0\\]\\.Signature\\.Confirm_First_Name"]').click();
  // await this.page.getByRole('group', { name: 'Electronic Signature -- toolset interface' }).locator('input[name="Application\\.Dependent\\[0\\]\\.Signature\\.Confirm_Last_Name"]').click();
  await this.page.getByRole('link', { name: 'Submit enrollment' }).click();
  

  // await this.page.waitForLoadState('networkidle');
  
//Please add inique IDs for these 4 elements
}

async applnSubmitted (){
await this.page.getByRole('link', { name: 'Continue' }).click();
}


async enrollmentSummary (){
  await this.page.getByRole('button', { name: 'Continue Application' }).click();
}

async startDentalEnrollment () {
await this.page.getByRole('link', { name: 'Start enrollment ' }).click();
}

async applicationInfo(address: string, city: string, phone: string, SSN: string){
  await this.page.locator('input[name="Application\\.Applicant\\.Middle_Initial"]').click();
  await this.addressLocator.click();
  await this.addressLocator.fill(address);
  await this.cityLocator.click();
  await this.cityLocator.fill(city);
  await this.phoneLocator.click();
  await this.phoneLocator.fill(phone);
  // await this.page.getByRole('textbox', { name: '###-##-####' }).click()
  // await this.page.getByRole('textbox', { name: '###-##-####' }).fill('123451111');
  await this.page.getByRole('textbox', { name: '###-##-####' }).click()
  console.log("Unique SSN:", SSN);
  await this.page.getByRole('textbox', { name: '###-##-####' }).fill(SSN);
  await this.page.getByRole('group', { name: 'Mailing address' }).getByLabel('Yes').check();
  await this.page.getByRole('link', { name: 'Continue ' }).click();
}

async familyInfoDentPlan(){
  await this.page.locator('input[name="Application\\.Dependent\\[0\\]\\.Middle_Initial"]').click();
  await this.page.locator('input[name="Application\\.Dependent\\[0\\]\\.Address_Same_Primary"]').first().check();
  await this.page.locator('input[name="Application\\.Dependent\\[0\\]\\.SSN_Not_Required"]').check();
  await this.page.locator('input[name="Application\\.Dependent\\[1\\]\\.Middle_Initial"]').click();
  await this.page.locator('input[name="Application\\.Dependent\\[1\\]\\.Address_Same_Primary"]').first().check();
  await this.page.locator('input[name="Application\\.Dependent\\[1\\]\\.SSN_Not_Required"]').check();
  await this.page.locator('input[name="Application\\.Dependent\\[2\\]\\.Middle_Initial"]').click();
  await this.page.locator('input[name="Application\\.Dependent\\[2\\]\\.Address_Same_Primary"]').first().check();
  await this.page.locator('input[name="Application\\.Dependent\\[2\\]\\.SSN_Not_Required"]').check();
  await this.page.locator('input[name="Application\\.Dependent\\[3\\]\\.Middle_Initial"]').click();
  await this.page.locator('input[name="Application\\.Dependent\\[3\\]\\.Address_Same_Primary"]').first().check();
  await this.page.locator('input[name="Application\\.Dependent\\[3\\]\\.SSN_Not_Required"]').check();
  await this.page.locator('input[name="Application\\.Dependent\\[4\\]\\.Middle_Initial"]').click();
  await this.page.locator('input[name="Application\\.Dependent\\[4\\]\\.Address_Same_Primary"]').first().check();
  await this.page.locator('input[name="Application\\.Dependent\\[4\\]\\.SSN_Not_Required"]').check();
  await this.page.getByRole('link', { name: 'Continue ' }).click();
  
  

}

async currentMedicalInfo(insName: string) {
  await this.page.getByText('*Do all persons applying for').click();
  // await this.page.getByLabel('Yes').check();
  // await this.page.locator('input[name="Application\\.Applicant\\.Prior_Coverage\\.Carrier_Name"]').click();
  // await this.page.locator('input[name="Application\\.Applicant\\.Prior_Coverage\\.Carrier_Name"]').fill('Cincinnati');
  await this.page.getByText('Yes', { exact: true }).click();
  await this.page.locator('input[name="Application\\.Applicant\\.Prior_Coverage\\.Carrier_Name"]').click();
  await this.page.locator('input[name="Application\\.Applicant\\.Prior_Coverage\\.Carrier_Name"]').fill('Cigna');
  await this.page.locator('input[name="Application\\.Applicant\\.Prior_Coverage\\.Address_1"]').click();
  await this.page.locator('input[name="Application\\.Applicant\\.Prior_Coverage\\.Address_1"]').fill('PO Box 495918');
  await this.page.locator('input[name="Application\\.Applicant\\.Prior_Coverage\\.City"]').click();
  await this.page.locator('input[name="Application\\.Applicant\\.Prior_Coverage\\.City"]').fill('Cincinnati');
  await this.page.locator('select[name="Application\\.Applicant\\.Prior_Coverage\\.State"]').selectOption('OH');
  await this.page.locator('input[name="Application\\.Applicant\\.Prior_Coverage\\.Zip"]').click();
  await this.page.locator('input[name="Application\\.Applicant\\.Prior_Coverage\\.Zip"]').fill('45249');
  await this.page.locator('input[name="Application\\.Applicant\\.Prior_Coverage\\.Policy_ID"]').click();
  await this.page.locator('input[name="Application\\.Applicant\\.Prior_Coverage\\.Policy_ID"]').fill('11223344');

  await this.page.locator('input[name="Application\\.Dependent\\[0\\]\\.Prior_Coverage\\.Carrier_Name"]').click();
  await this.page.locator('input[name="Application\\.Dependent\\[0\\]\\.Prior_Coverage\\.Carrier_Name"]').fill('Cigna');
  await this.page.locator('input[name="Application\\.Dependent\\[0\\]\\.Prior_Coverage\\.Address_1"]').click();
  await this.page.locator('input[name="Application\\.Dependent\\[0\\]\\.Prior_Coverage\\.Address_1"]').fill('PO Box 495918');
  await this.page.locator('input[name="Application\\.Dependent\\[0\\]\\.Prior_Coverage\\.City"]').click();
  await this.page.locator('input[name="Application\\.Dependent\\[0\\]\\.Prior_Coverage\\.City"]').fill('Cincinnati');
  await this.page.locator('select[name="Application\\.Dependent\\[0\\]\\.Prior_Coverage\\.State"]').selectOption('OH');
  await this.page.locator('input[name="Application\\.Dependent\\[0\\]\\.Prior_Coverage\\.Zip"]').click();
  await this.page.locator('input[name="Application\\.Dependent\\[0\\]\\.Prior_Coverage\\.Zip"]').fill('45249');
  await this.page.locator('input[name="Application\\.Dependent\\[0\\]\\.Prior_Coverage\\.Policy_ID"]').click();
  await this.page.locator('input[name="Application\\.Dependent\\[0\\]\\.Prior_Coverage\\.Policy_ID"]').fill('11223344');

  await this.page.locator('input[name="Application\\.Dependent\\[1\\]\\.Prior_Coverage\\.Carrier_Name"]').click();
  await this.page.locator('input[name="Application\\.Dependent\\[1\\]\\.Prior_Coverage\\.Carrier_Name"]').fill('Cigna');
  await this.page.locator('input[name="Application\\.Dependent\\[1\\]\\.Prior_Coverage\\.Address_1"]').click();
  await this.page.locator('input[name="Application\\.Dependent\\[1\\]\\.Prior_Coverage\\.Address_1"]').fill('PO Box 495918');
  await this.page.locator('input[name="Application\\.Dependent\\[1\\]\\.Prior_Coverage\\.City"]').click();
  await this.page.locator('input[name="Application\\.Dependent\\[1\\]\\.Prior_Coverage\\.City"]').fill('Cincinnati');
  await this.page.locator('select[name="Application\\.Dependent\\[1\\]\\.Prior_Coverage\\.State"]').selectOption('OH');
  await this.page.locator('input[name="Application\\.Dependent\\[1\\]\\.Prior_Coverage\\.Zip"]').click();
  await this.page.locator('input[name="Application\\.Dependent\\[1\\]\\.Prior_Coverage\\.Zip"]').fill('45249');
  await this.page.locator('input[name="Application\\.Dependent\\[1\\]\\.Prior_Coverage\\.Policy_ID"]').click();
  await this.page.locator('input[name="Application\\.Dependent\\[1\\]\\.Prior_Coverage\\.Policy_ID"]').fill('11223344');

  await this.page.locator('input[name="Application\\.Dependent\\[2\\]\\.Prior_Coverage\\.Carrier_Name"]').click();
  await this.page.locator('input[name="Application\\.Dependent\\[2\\]\\.Prior_Coverage\\.Carrier_Name"]').fill('Cigna');
  await this.page.locator('input[name="Application\\.Dependent\\[2\\]\\.Prior_Coverage\\.Address_1"]').click();
  await this.page.locator('input[name="Application\\.Dependent\\[2\\]\\.Prior_Coverage\\.Address_1"]').fill('PO Box 495918');
  await this.page.locator('input[name="Application\\.Dependent\\[2\\]\\.Prior_Coverage\\.City"]').click();
  await this.page.locator('input[name="Application\\.Dependent\\[2\\]\\.Prior_Coverage\\.City"]').fill('Cincinnati');
  await this.page.locator('select[name="Application\\.Dependent\\[2\\]\\.Prior_Coverage\\.State"]').selectOption('OH');
  await this.page.locator('input[name="Application\\.Dependent\\[2\\]\\.Prior_Coverage\\.Zip"]').click();
  await this.page.locator('input[name="Application\\.Dependent\\[2\\]\\.Prior_Coverage\\.Zip"]').fill('45249');
  await this.page.locator('input[name="Application\\.Dependent\\[2\\]\\.Prior_Coverage\\.Policy_ID"]').click();
  await this.page.locator('input[name="Application\\.Dependent\\[2\\]\\.Prior_Coverage\\.Policy_ID"]').fill('11223344');

  await this.page.locator('input[name="Application\\.Dependent\\[3\\]\\.Prior_Coverage\\.Carrier_Name"]').click();
  await this.page.locator('input[name="Application\\.Dependent\\[3\\]\\.Prior_Coverage\\.Carrier_Name"]').fill('Cigna');
  await this.page.locator('input[name="Application\\.Dependent\\[3\\]\\.Prior_Coverage\\.Address_1"]').click();
  await this.page.locator('input[name="Application\\.Dependent\\[3\\]\\.Prior_Coverage\\.Address_1"]').fill('PO Box 495918');
  await this.page.locator('input[name="Application\\.Dependent\\[3\\]\\.Prior_Coverage\\.City"]').click();
  await this.page.locator('input[name="Application\\.Dependent\\[3\\]\\.Prior_Coverage\\.City"]').fill('Cincinnati');
  await this.page.locator('select[name="Application\\.Dependent\\[3\\]\\.Prior_Coverage\\.State"]').selectOption('OH');
  await this.page.locator('input[name="Application\\.Dependent\\[3\\]\\.Prior_Coverage\\.Zip"]').click();
  await this.page.locator('input[name="Application\\.Dependent\\[3\\]\\.Prior_Coverage\\.Zip"]').fill('45249');
  await this.page.locator('input[name="Application\\.Dependent\\[3\\]\\.Prior_Coverage\\.Policy_ID"]').click();
  await this.page.locator('input[name="Application\\.Dependent\\[3\\]\\.Prior_Coverage\\.Policy_ID"]').fill('11223344');

  await this.page.locator('input[name="Application\\.Dependent\\[4\\]\\.Prior_Coverage\\.Carrier_Name"]').click();
  await this.page.locator('input[name="Application\\.Dependent\\[4\\]\\.Prior_Coverage\\.Carrier_Name"]').fill('Cigna');
  await this.page.locator('input[name="Application\\.Dependent\\[4\\]\\.Prior_Coverage\\.Address_1"]').click();
  await this.page.locator('input[name="Application\\.Dependent\\[4\\]\\.Prior_Coverage\\.Address_1"]').fill('PO Box 495918');
  await this.page.locator('input[name="Application\\.Dependent\\[4\\]\\.Prior_Coverage\\.City"]').click();
  await this.page.locator('input[name="Application\\.Dependent\\[4\\]\\.Prior_Coverage\\.City"]').fill('Cincinnati');
  await this.page.locator('select[name="Application\\.Dependent\\[4\\]\\.Prior_Coverage\\.State"]').selectOption('OH');
  await this.page.locator('input[name="Application\\.Dependent\\[4\\]\\.Prior_Coverage\\.Zip"]').click();
  await this.page.locator('input[name="Application\\.Dependent\\[4\\]\\.Prior_Coverage\\.Zip"]').fill('45249');
  await this.page.locator('input[name="Application\\.Dependent\\[4\\]\\.Prior_Coverage\\.Policy_ID"]').click();
  await this.page.locator('input[name="Application\\.Dependent\\[4\\]\\.Prior_Coverage\\.Policy_ID"]').fill('11223344');
  await this.page.getByRole('link', { name: 'Continue ' }).click();

}

async currentPreviousDentIns(){
  await this.page.getByLabel('No').first().check(); //no current or previous dent covg w/in last 3 months
  await this.page.getByRole('link', { name: 'Continue ' }).click();
}

async autoPayDentalPlan(lastName: string){
  // await this.page.getByRole('radio', { name: 'NO', exact: true }).check();
  await this.page.getByLabel('No, I prefer to get and pay').check();
  await this.page.getByLabel('Credit/Debit Card').check(); 
  await this.creditCardFirstNameLocator.click();
  await this.creditCardFirstNameLocator.fill('TESTAUTO');
  await this.creditCardLastNameLocator.click();
  await this.creditCardLastNameLocator.fill(lastName);
  await this.page.getByLabel('Visa').check();
  await this.page.locator('input[name="Application\\.Initial_Credit_Card\\.CC_Number"]').click();
  await this.page.locator('input[name="Application\\.Initial_Credit_Card\\.CC_Number"]').fill('4111111111111111');
  await this.page.getByPlaceholder('mm/yyyy').click();
  await this.page.getByPlaceholder('mm/yyyy').fill('10/2030');
  await this.page.locator('div').filter({ hasText: /^Yes$/ }).click();
  await this.page.getByRole('link', { name: 'Continue ' }).click();
}

//verify the page and do not make any changes and click CONTINUE
async confirmYourAppln() {
  await this.page.getByRole('link', { name: 'Continue ' }).click();
  await this.page.waitForLoadState('networkidle');
}


async  submitFormforPrimary(lastName: string,dependentFirstName: string,depenedentLastName: string){
  
  await this.page.locator('[id="FEL96CB4DD4FAFD18AC23E0"] > .checkBoxFields > .checkBox-option-div > .checkBox-choice-label').click();

  await this.page.locator('xpath=//*[@id="FEL299G7BB6F547322FC1F6"]/input').click();
  await this.page.locator('xpath=//*[@id="FEL299G7BB6F547322FC1F6"]/input').fill('TestAuto')
  await this.page.locator('xpath=//*[@id="FEL8159GB9C8BAFC145BF4C"]/input').click();
  await this.page.locator('xpath=//*[@id="FEL8159GB9C8BAFC145BF4C"]/input').fill(lastName); 
  await this.page.locator('xpath=//*[@id="FEL7B44E395958G3FA88G76"]/input').click();
  await this.page.locator('xpath=//*[@id="FEL7B44E395958G3FA88G76"]/input').fill('TestAuto')
  await this.page.locator('xpath=//*[@id="FELE19B21B442185B9G9671"]/input').click();
  await this.page.locator('xpath=//*[@id="FELE19B21B442185B9G9671"]/input').fill(lastName); 

  await this.page.locator('[id="FEL352296EABC66C76F58A6\\[0\\]"] > .checkBoxFields > .checkBox-option-div > .checkBox-choice-label').click();
  await this.page.locator('xpath=//*[@id="FEL5CEFDFF4683F5BD42AF4[0]"]/input').click();
  await this.page.locator('xpath=//*[@id="FEL5CEFDFF4683F5BD42AF4[0]"]/input').fill(dependentFirstName)
  await this.page.locator('xpath=//*[@id="FELCC7CD5F7F81863BA2C78[0]"]/input').click();
  await this.page.locator('xpath=//*[@id="FELCC7CD5F7F81863BA2C78[0]"]/input').fill(depenedentLastName); 
  await this.page.locator('xpath=//*[@id="FELE6GDE7CADBED1CA7C996[0]"]/input').click();
  await this.page.locator('xpath=//*[@id="FELE6GDE7CADBED1CA7C996[0]"]/input').fill(dependentFirstName)
  await this.page.locator('xpath=//*[@id="FELFB4092D1AD63A4G5GAE0[0]"]/input').click();
  await this.page.locator('xpath=//*[@id="FELFB4092D1AD63A4G5GAE0[0]"]/input').fill(depenedentLastName);
  
  await this.page.getByRole('link', { name: 'Submit enrollment' }).click();
  // await this.page.locator('#modalDialog').getByText('Continue', { exact: true }).click();
}

async continueBtn(){
  await this.page.locator('#modalDialog').getByText('Continue', { exact: true }).click();
}

async gotoAccount (){
 
  await this.page.getByRole('link', {name: 'Go to My Account'}).click();
  await expect(this.page).toHaveTitle('HealthPartners - My Account');
  await expect(this.page.locator('tbody')).toContainText('Accepted');
}

}
