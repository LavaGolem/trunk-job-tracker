describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/trunk-job-tracker')
  })

  it('shows job id selector', () => {
    cy.get('[data-testid="job-id-selector"]').should("exist");
    cy.get('[data-testid="job-id-selector"]').click();
    cy.get('li').contains('ce6bff8d-eb09-4208-9405-c2594f74ccb0');
    cy.get('li').contains('ce6bff8d-eb09-4208-9405-c2594f74ccb3');
  })

  it('shows events for job', () => {
    cy.get('[data-testid="timeline-item"]').should('have.length', 26);
  })

  it('changes events when job changes', () => {
    cy.get('[data-testid="job-id-selector"]').click();
    cy.get('li').contains('ce6bff8d-eb09-4208-9405-c2594f74ccb3').click();
    cy.get('[data-testid="timeline-item"]').should('have.length', 1);
  })


  it('show more info when timeline item clicked', () => {
    cy.get('[data-testid="timeline-item"]').first().click();
    cy.get('div').contains('Metadata');
  })
})
