import React from 'react';
import { Flex, Box } from '@rebass/grid';
import { Form, Field } from 'formik';
import Text from '../core/Text';
import Button from '../core/Button';
import Input from '../core/Input';
import Select from '../core/Select';
import Widget from '../core/Widget';
import Fieldset from '../core/Fieldset';

const CheckoutForm = ({ disabled }) => (
	<Form>
		<Fieldset label="Delivery" mb={5}>
			<Widget label="Address" mb={4}>
				<Field name="address">
					{({ field }) => (
						<Input
							autoComplete="shipping street-address"
							required
							fullWidth
							{...field}
						/>
					)}
				</Field>
			</Widget>
			<Flex flexWrap="wrap" m={-3} mb={3}>
				<Box width={[1, 1 / 4]} p={3}>
					<Widget label="Zip code">
						<Field name="zip">
							{({ field }) => (
								<Input
									autoComplete="shipping postal-code"
									required
									pattern="^[0-9]+$"
									fullWidth
									{...field}
								/>
							)}
						</Field>
					</Widget>
				</Box>
				<Box width={[1, 1 / 4]} p={3}>
					<Widget label="Country">
						<Field name="country">
							{({ field }) => (
								<Select
									autoComplete="shipping country"
									required
									fullWidth
									{...field}
								>
									<option>Berlin</option>
								</Select>
							)}
						</Field>
					</Widget>
				</Box>
				<Box width={[1, 1 / 2]} p={3}>
					<Widget label="City">
						<Field name="city">
							{({ field }) => (
								<Input
									autoComplete="shipping locality"
									required
									fullWidth
									{...field}
								/>
							)}
						</Field>
					</Widget>
				</Box>
			</Flex>
			<Flex flexWrap="wrap" m={-3} mb={3}>
				<Box width={[1, 1 / 2]} p={3}>
					<Widget label="Date from">
						<Field name="datefrom">
							{({ field }) => (
								<Input type="date" required fullWidth {...field} />
							)}
						</Field>
					</Widget>
				</Box>
				<Box width={[1, 1 / 2]} p={3}>
					<Widget label="Date to">
						<Field name="dateto">
							{({ field }) => (
								<Input type="date" required fullWidth {...field} />
							)}
						</Field>
					</Widget>
				</Box>
			</Flex>
		</Fieldset>
		<Fieldset label="Payment" mb={5}>
			<Widget label="Card number" mb={4}>
				<Field name="cardnumber">
					{({ field }) => (
						<Input autoComplete="cc-number" required fullWidth {...field} />
					)}
				</Field>
			</Widget>
			<Flex flexWrap="wrap" m={-3} mb={3}>
				<Box width={[1, 1 / 2]} p={3}>
					<Widget label="Name on card">
						<Field name="ccname">
							{({ field }) => (
								<Input autoComplete="cc-name" required fullWidth {...field} />
							)}
						</Field>
					</Widget>
				</Box>
				<Box width={[1, 1 / 4]} p={3}>
					<Widget label="Expiry date">
						<Field name="cc-exp">
							{({ field }) => (
								<Input
									autoComplete="cc-exp"
									placeholder="MM/YY"
									required
									fullWidth
									{...field}
								/>
							)}
						</Field>
					</Widget>
				</Box>
				<Box width={[1, 1 / 4]} p={3}>
					<Widget label="Security code">
						<Field name="cvc">
							{({ field }) => (
								<Input autoComplete="cc-csc" required fullWidth {...field} />
							)}
						</Field>
					</Widget>
				</Box>
			</Flex>
		</Fieldset>
		<Flex flexWrap="wrap" alignItems="baseline" m={-3}>
			<Box width={[1, 'auto']} p={3}>
				<Button type="submit" variant="primary" disabled={disabled}>
					Place an order
				</Button>
			</Box>
			<Box width={[1, 'auto']} p={3}>
				<Text variant="secondary">
					By clicking the “Place an order” button you agree to Rent-a-dog Terms
					and conditions
				</Text>
			</Box>
		</Flex>
	</Form>
);

export default CheckoutForm;
