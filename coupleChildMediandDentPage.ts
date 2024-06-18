import { test, expect, Page, Locator } from '@playwright/test';


export class CoupleChildMedicalAndDentalPage {
  private readonly page: Page;
  readonly zipCodeLocator: Locator;
  readonly firstNameLocator: Locator;
  readonly lastNameLocator: Locator;
  readonly birthDateLocator: Locator;
  readonly genderLocator: Locator;
  readonly childGenderLocator: Locator;
  readonly smokerLocator: Locator;
  readonly primaryCFirstNameLocator: Locator;
  readonly primaryCLastlastNameLocator: Locator;
  readonly primaryCBirthDateLocator: Locator;
  readonly primaryCGenderLocator: Locator;
  readonly primaryCSmokerLocator: Locator;
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
    
    this.primaryCFirstNameLocator = this.page.locator('#firstName32');
    this.primaryCLastlastNameLocator = this.page.locator('#lastName33');
    this.primaryCBirthDateLocator = this.page.locator('#birthDate34');
    this.primaryCGenderLocator = this.page.locator('#gender36');
    this.primaryCSmokerLocator = this.page.locator('#isSmoker37');

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

  }

  async seeIfYouQualify_OE() {
      
    await this.page.getByRole('link', { name: 'Skip & Shop Plans' }).click(),{ timeout: 30000 };
   
  }
  
  async Marriage(){
    await this.page.getByLabel('Marriage').check();
    await this.page.getByLabel('Enter the date of your event:').click();
    await this.page.getByRole('cell', { name: '2', exact: true }).first().click();
    // await this.page.getByRole('checkbox').check();
  
  }

  async child(){
    await this.page.getByText('Birth of child, adoption of').click();
    await this.page.getByLabel('Enter the date of your event:').click();
    await this.page.getByRole('cell', { name: '2', exact: true }).first().click(); 
    await this.page.getByRole('checkbox').check();   
    
  }

  async saveAndContinue(){

    await expect(async () => {
      await this.page.getByRole('link', { name: "SAVE & CONTINUE" }).click()
      //await expect(this.page).toHaveURL("http://hpmssiat1:8180/hp/shopping/anonymous.html?#view/account/WhosCoveredSE/Demographics")
      //await expect(this.page).toHaveURL("https://individualinsurance-stg.healthpartners.com/hp/shopping/anonymous.html#view/account/WhosCoveredSE/Demographics")
      await expect(this.page).toHaveURL("https://individualinsurance-stg.healthpartners.com/hp/shopping/anonymous.html#view/account/WhosCoveredSE/Demographics")

    }).toPass()
  }
  

  async fillZipCode(zipCode: string) {
    await this.zipCodeLocator.waitFor({ state: 'visible' });
    await this.zipCodeLocator.fill(zipCode);
  }

  async childOnly(){
    await this.page.getByLabel('*Child Only').selectOption('true');
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

  async fillCFirstName() {
    await this.primaryCFirstNameLocator.click();
    await this.primaryCFirstNameLocator.fill('TestAuto');
  }

  async fillCLastName(lastName: string) {
    await this.primaryCLastlastNameLocator.click();
    await this.primaryCLastlastNameLocator.fill(lastName);
  }

  async fillCBirthDate(birthDate: string) {
    await this.primaryCBirthDateLocator.click();
    await this.primaryCBirthDateLocator.fill(birthDate);
  }

  async selectCGender(gender: string) {
    await this.primaryCGenderLocator.selectOption(gender);
  }

  async selectCSmokerOption(option: string) {
    await this.primaryCSmokerLocator.click();
    await this.primaryCSmokerLocator.selectOption(option);
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

async securityQuestionAndbrokerDetails(answer: string){
  await this.securityQuestionLocator.selectOption('What was your childhood nickname?');
  await this.answerLocator.click();
  await this.answerLocator.fill(answer);
  await this.page.getByLabel('Yes').check();
  await this.page.getByRole('button', { name: ' Search' }).click();
  await this.page.locator('#ownerFirstName').click();
  await this.page.locator('#ownerFirstName').fill('daniel');
  await this.page.locator('#ownerLastName').click();
  await this.page.locator('#ownerLastName').fill('michels');
  await this.page.getByRole('button', { name: 'Search', exact: true }).click();
  await this.page.getByRole('button', { name: 'Select' }).click();
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
    
  }

  async guardianDetailsForOnlyChild(phone: string){
    await this.page.locator('input[name="Application\\.Applicant\\.Guardian\\.First_Name"]').click();
    await this.page.locator('input[name="Application\\.Applicant\\.Guardian\\.First_Name"]').fill('testdad');
    await this.page.locator('input[name="Application\\.Applicant\\.Guardian\\.Last_Name"]').click();
    await this.page.locator('input[name="Application\\.Applicant\\.Guardian\\.Last_Name"]').fill('qatest');
    await this.page.locator('select[name="Application\\.Applicant\\.Guardian\\.Relationship"]').selectOption('Parent');
    await this.page.locator('input[name="Application\\.Applicant\\.Guardian\\.Home_Phone"]').click();
    await this.page.locator('input[name="Application\\.Applicant\\.Guardian\\.Home_Phone"]').fill(phone);
    await this.page.getByRole('group', { name: 'Guardian information' }).getByLabel('Yes').check();
    
  }
async enrollmentPageOneSave(){
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
   await this.page.getByRole('link', { name: 'Continue ' }).click();
  

}

async planInformation(){

  await this.page.locator('div:nth-child(2) > .radio-choice-label').first().click();
  await this.page.locator('[id="FEL443E7861B61772D48A61\\[0\\]"] > .radioFields > div:nth-child(2)  > .radio-choice-label').click();
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



async  fillPholderForm(lastName: string){
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
}

async  fillDependentForm(dependentFirstName: string,depenedentLastName: string){
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
  
//Please add inique IDs for these 4 elements
}

async  fillChildAsPholderForm(){
  await this.page.locator('[id="FEL9196F35242029FF3190C"] > .checkBoxFields > .checkBox-option-div > .checkBox-choice-label').click();
  await this.page.locator('[id="FEL19647AG787BDB1DA2G0B"] > .checkBoxFields > .checkBox-option-div > .checkBox-choice-label').click();
  await this.page.getByRole('group', { name: 'Electronic Signature --' }).locator('input[name="Application\\.Applicant\\.Guardian\\.Signature\\.First_Name"]').click();
  await this.page.getByRole('group', { name: 'Electronic Signature --' }).locator('input[name="Application\\.Applicant\\.Guardian\\.Signature\\.First_Name"]').fill('testdad');
  await this.page.getByRole('group', { name: 'Electronic Signature --' }).locator('input[name="Application\\.Applicant\\.Guardian\\.Signature\\.Last_Name"]').click();
  await this.page.getByRole('group', { name: 'Electronic Signature --' }).locator('input[name="Application\\.Applicant\\.Guardian\\.Signature\\.Last_Name"]').fill('qatest');
  await this.page.getByRole('group', { name: 'Electronic Signature --' }).locator('input[name="Application\\.Applicant\\.Guardian\\.Signature\\.Confirm_First_Name"]').click();
  await this.page.getByRole('group', { name: 'Electronic Signature --' }).locator('input[name="Application\\.Applicant\\.Guardian\\.Signature\\.Confirm_First_Name"]').fill('testdad');
  await this.page.getByRole('group', { name: 'Electronic Signature --' }).locator('input[name="Application\\.Applicant\\.Guardian\\.Signature\\.Confirm_Last_Name"]').click();
  await this.page.getByRole('group', { name: 'Electronic Signature --' }).locator('input[name="Application\\.Applicant\\.Guardian\\.Signature\\.Confirm_Last_Name"]').fill('qatest');

}

async submitForm (){
  await this.page.getByRole('link', { name: 'Submit enrollment' }).click();
  await this.page.locator('#modalDialog').getByText('Continue', { exact: true }).click();
  
}

async submitForm_OE (){
  await this.page.getByRole('link', { name: 'Submit enrollment' }).click();
  // await this.page.locator('#modalDialog').getByText('Continue', { exact: true }).click();
  
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
  // await this.page.getByRole('link', { name: 'Continue ' }).click();
}

async applicationInfoSave(){
  await this.page.getByRole('link', { name: 'Continue ' }).click();
}
async familyInfoDentPlan(){
  await this.page.locator('input[name="Application\\.Dependent\\[0\\]\\.Middle_Initial"]').click();
  await this.page.locator('input[name="Application\\.Dependent\\[0\\]\\.Address_Same_Primary"]').first().check();
  await this.page.locator('input[name="Application\\.Dependent\\[0\\]\\.SSN_Not_Required"]').check();
  await this.page.getByRole('link', { name: 'Continue ' }).click();
  
  

}

async currentMedicalPrimaryInfo(insName: string) {
  await this.page.getByText('*Do all persons applying for').click();
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
}
async currentMedicalDependentInfo(insName: string) {
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

  

}

async cureentMediInfoSave(){
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


async  fillFormforPrimary(lastName: string){
  
  await this.page.locator('[id="FEL96CB4DD4FAFD18AC23E0"] > .checkBoxFields > .checkBox-option-div > .checkBox-choice-label').click();

  await this.page.locator('xpath=//*[@id="FEL299G7BB6F547322FC1F6"]/input').click();
  await this.page.locator('xpath=//*[@id="FEL299G7BB6F547322FC1F6"]/input').fill('TestAuto')
  await this.page.locator('xpath=//*[@id="FEL8159GB9C8BAFC145BF4C"]/input').click();
  await this.page.locator('xpath=//*[@id="FEL8159GB9C8BAFC145BF4C"]/input').fill(lastName); 
  await this.page.locator('xpath=//*[@id="FEL7B44E395958G3FA88G76"]/input').click();
  await this.page.locator('xpath=//*[@id="FEL7B44E395958G3FA88G76"]/input').fill('TestAuto')
  await this.page.locator('xpath=//*[@id="FELE19B21B442185B9G9671"]/input').click();
  await this.page.locator('xpath=//*[@id="FELE19B21B442185B9G9671"]/input').fill(lastName); 
}

async fillFormforDependent(dependentFirstName: string,depenedentLastName: string){

  await this.page.locator('[id="FEL352296EABC66C76F58A6\\[0\\]"] > .checkBoxFields > .checkBox-option-div > .checkBox-choice-label').click();
  await this.page.locator('xpath=//*[@id="FEL5CEFDFF4683F5BD42AF4[0]"]/input').click();
  await this.page.locator('xpath=//*[@id="FEL5CEFDFF4683F5BD42AF4[0]"]/input').fill(dependentFirstName)
  await this.page.locator('xpath=//*[@id="FELCC7CD5F7F81863BA2C78[0]"]/input').click();
  await this.page.locator('xpath=//*[@id="FELCC7CD5F7F81863BA2C78[0]"]/input').fill(depenedentLastName); 
  await this.page.locator('xpath=//*[@id="FELE6GDE7CADBED1CA7C996[0]"]/input').click();
  await this.page.locator('xpath=//*[@id="FELE6GDE7CADBED1CA7C996[0]"]/input').fill(dependentFirstName)
  await this.page.locator('xpath=//*[@id="FELFB4092D1AD63A4G5GAE0[0]"]/input').click();
  await this.page.locator('xpath=//*[@id="FELFB4092D1AD63A4G5GAE0[0]"]/input').fill(depenedentLastName);
}

async  fillChildAsPholderDentForm(){
  await this.page.locator('[id="FEL50A15ECCDEC8GD2E8168"] > .checkBoxFields > .checkBox-option-div > .checkBox-choice-label').click();
  // await this.page.locator('[id="FEL19647AG787BDB1DA2G0B"] > .checkBoxFields > .checkBox-option-div > .checkBox-choice-label').click();
  await this.page.getByRole('group', { name: 'Electronic Signature --' }).locator('input[name="Application\\.Applicant\\.Guardian\\.Signature\\.First_Name"]').click();
  await this.page.getByRole('group', { name: 'Electronic Signature --' }).locator('input[name="Application\\.Applicant\\.Guardian\\.Signature\\.First_Name"]').fill('testdad');
  await this.page.getByRole('group', { name: 'Electronic Signature --' }).locator('input[name="Application\\.Applicant\\.Guardian\\.Signature\\.Last_Name"]').click();
  await this.page.getByRole('group', { name: 'Electronic Signature --' }).locator('input[name="Application\\.Applicant\\.Guardian\\.Signature\\.Last_Name"]').fill('qatest');
  await this.page.getByRole('group', { name: 'Electronic Signature --' }).locator('input[name="Application\\.Applicant\\.Guardian\\.Signature\\.Confirm_First_Name"]').click();
  await this.page.getByRole('group', { name: 'Electronic Signature --' }).locator('input[name="Application\\.Applicant\\.Guardian\\.Signature\\.Confirm_First_Name"]').fill('testdad');
  await this.page.getByRole('group', { name: 'Electronic Signature --' }).locator('input[name="Application\\.Applicant\\.Guardian\\.Signature\\.Confirm_Last_Name"]').click();
  await this.page.getByRole('group', { name: 'Electronic Signature --' }).locator('input[name="Application\\.Applicant\\.Guardian\\.Signature\\.Confirm_Last_Name"]').fill('qatest');

}

async submitFormDent(){

  await this.page.getByRole('link', { name: 'Submit enrollment' }).click();
  // await this.page.locator('#modalDialog').getByText('Continue', { exact: true }).click();
}

async submitFormDent_OE(){

  await this.page.getByRole('link', { name: 'Submit enrollment' }).click();
  await this.page.locator('#modalDialog').getByText('Continue', { exact: true }).click();
}

async gotoAccount (){

await this.page.getByRole('link', {name: 'Go to My Account'}).click();
await this.page.waitForTimeout(3000);
await expect(this.page).toHaveTitle('HealthPartners - My Account');
await expect(this.page.locator('tbody')).toContainText('Accepted');
console.log('reached My Account');
}

}
