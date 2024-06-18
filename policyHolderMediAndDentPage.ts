import { test, expect, Page, Locator } from '@playwright/test';

export class PolicyHolderPage {
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
    this.applicantFirstNameLocator = this.page.locator('input[name="Application.Signature.First_Name"]');
    this.applicantLastNameLocator = this.page.locator('input[name="Application.Signature.Last_Name"]');
    this.confirmFirstNameLocator = this.page.locator('input[name="Application.Signature.Confirm_First_Name"]');
    this.confirmLastNameLocator = this.page.locator('input[name="Application.Signature.Confirm_Last_Name"]');
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
    await this.page.getByLabel('Loss of other coverage (e.g.').check();
    await this.page.getByLabel('Enter the date of your event:').click();
    await this.page.getByRole('cell', { name: '2', exact: true }).first().click();
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
    await this.firstNameLocator.fill('TESTAUTO');
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
  await this.page.waitForLoadState('networkidle');

  }

  async viewCartAndEnroll () {

    await this.page.getByRole('link', { name: 'View Cart & Enroll' }).click();
    await this.page.waitForLoadState('networkidle');
  }

  async addDentalPlan (){
    await this.page.getByRole('link', { name: 'Continue Shopping' }).click();
    await this.page.getByRole('combobox').first().selectOption('prod_dental');
    await this.page.locator('div').filter({ hasText: /^\$48\.57\/ moAdd to cart$/ }).getByRole('link').click();
    await this.page.getByRole('link', { name: 'View Cart & Enroll' }).click();
  
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
    // await this.page.getByLabel('No').check(); 
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
    await this.page.getByText('*Social Security numberYour').click();
    // await this.page.getByRole('textbox', { name: '###-##-####' }).click()
    // await this.page.getByRole('textbox', { name: '###-##-####' }).fill('123451111');
    await this.page.getByRole('textbox', { name: '###-##-####' }).click()
    console.log("Unique SSN:", SSN);
    await this.page.getByRole('textbox', { name: '###-##-####' }).fill(SSN);
    await this.page.getByText('No, not of Hispanic, Latino/a').click();
    await this.page.getByText('White').click();
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


//add a function here

async previousHealthPlan() {

    // await this.page.locator('#RADIO71FE75CC4G4GB17D54CA').check();
    await this.page.getByText('No').first().click();
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
    await this.page.waitForLoadState('networkidle');
 }

async  submitForm(lastName: string){
    await this.page.locator('[id="FEL5GEG3280BA3E9E02F2F7"] > .checkBoxFields > .checkBox-option-div > .checkBox-choice-label').click();
    await this.page.locator('[id="FELB1CF3ED4217454BBCE80"] > .checkBoxFields > .checkBox-option-div > .checkBox-choice-label').click();
    await this.page.getByRole('group', { name: 'Electronic Signature --' }).locator('input[name="Application\\.Signature\\.First_Name"]').click();
    await this.page.getByRole('group', { name: 'Electronic Signature --' }).locator('input[name="Application\\.Signature\\.First_Name"]').fill('TESTAUTO');
    await this.page.getByRole('group', { name: 'Electronic Signature --' }).locator('input[name="Application\\.Signature\\.Last_Name"]').click();
    await this.page.getByRole('group', { name: 'Electronic Signature --' }).locator('input[name="Application\\.Signature\\.Last_Name"]').fill(lastName);
    await this.page.getByRole('group', { name: 'Electronic Signature --' }).locator('input[name="Application\\.Signature\\.Confirm_First_Name"]').click();
    await this.page.getByRole('group', { name: 'Electronic Signature --' }).locator('input[name="Application\\.Signature\\.Confirm_First_Name"]').fill('TESTAUTO');
    await this.page.getByRole('group', { name: 'Electronic Signature --' }).locator('input[name="Application\\.Signature\\.Confirm_Last_Name"]').click();
    await this.page.getByRole('group', { name: 'Electronic Signature --' }).locator('input[name="Application\\.Signature\\.Confirm_Last_Name"]').fill(lastName);
    await this.page.getByRole('link', { name: 'Submit enrollment' }).click();
    await this.page.waitForLoadState('networkidle');
    
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

async currentMedicalInfo(insName: string) {
    await this.page.getByText('*Do all persons applying for').click();
    await this.page.getByLabel('Yes').check();
    await this.page.locator('input[name="Application\\.Applicant\\.Prior_Coverage\\.Carrier_Name"]').click();
    await this.page.locator('input[name="Application\\.Applicant\\.Prior_Coverage\\.Carrier_Name"]').fill(insName);
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


async  submitFormforPrimary(lastName: string){
    
    await this.page.locator('[id="FEL96CB4DD4FAFD18AC23E0"] > .checkBoxFields > .checkBox-option-div > .checkBox-choice-label').click();
    await this.page.getByRole('group', { name: 'Electronic Signature --' }).locator('input[name="Application\\.Signature\\.First_Name"]').click();
    await this.page.getByRole('group', { name: 'Electronic Signature --' }).locator('input[name="Application\\.Signature\\.First_Name"]').fill('TESTAUTO');
    await this.page.getByRole('group', { name: 'Electronic Signature --' }).locator('input[name="Application\\.Signature\\.Last_Name"]').click();
    await this.page.getByRole('group', { name: 'Electronic Signature --' }).locator('input[name="Application\\.Signature\\.Last_Name"]').fill(lastName);
    await this.page.getByRole('group', { name: 'Electronic Signature --' }).locator('input[name="Application\\.Signature\\.Confirm_First_Name"]').click();
    await this.page.getByRole('group', { name: 'Electronic Signature --' }).locator('input[name="Application\\.Signature\\.Confirm_First_Name"]').fill('TESTAUTO');
    await this.page.getByRole('group', { name: 'Electronic Signature --' }).locator('input[name="Application\\.Signature\\.Confirm_Last_Name"]').click();
    await this.page.getByRole('group', { name: 'Electronic Signature --' }).locator('input[name="Application\\.Signature\\.Confirm_Last_Name"]').fill(lastName);
    await this.page.getByRole('link', { name: 'Submit enrollment' }).click();
    await this.page.waitForLoadState('networkidle');
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
