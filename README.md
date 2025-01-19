  # Step 6: Deploy to Vercel
    #   - name: Deploy to Vercel
    #     uses: amondnet/vercel-action@v20
    #     with:
    #       vercel-token: ${{ secrets.VERCEL_TOKEN }}  # Make sure to store this token in GitHub secrets
    #       vercel_org_id: ${{ secrets.VERCEL_ORG_ID }}  # Add this to GitHub secrets
    #       vercel_project_id: ${{ secrets.VERCEL_PROJECT_ID }}  # Add this to GitHub secrets
    #       vercel_environment: production  # Change to "preview" for preview deployments (if needed)
    #       vercel_directory: ./build  # This is where Vercel will find your built app
